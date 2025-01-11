"use client";

import React, {useEffect, useState} from "react";
import ActivityCalendar from "react-activity-calendar";

const Cal = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalContributions, setTotalContributions] = useState(0); // Łączna liczba akcji
  const [activeDays, setActiveDays] = useState(0); // Liczba dni z aktywnością

  useEffect(() => {
    const fetchData = async () => {
      const startDate = "2024-01-10T00:00:00Z"; // Początek zakresu
      const endDate = new Date().toISOString(); // Dzisiejsza data

      const query = `
        query ($username: String!, $startDate: DateTime!, $endDate: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $startDate, to: $endDate) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      const variables = {
        username: "JacekPasierb", // Zmień na swoją nazwę użytkownika
        startDate,
        endDate,
      };

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({query, variables}),
        });

        if (!response.ok) {
          throw new Error("Błąd pobierania danych z GraphQL API");
        }

        const result = await response.json();
        const calendar =
          result?.data?.user?.contributionsCollection?.contributionCalendar;

        if (!calendar) {
          throw new Error("Brak danych w odpowiedzi API");
        }

        const days = calendar.weeks.flatMap((week) => week.contributionDays);

        // Oblicz liczbę dni z aktywnością (count > 0)
        const activeDaysCount = days.filter(
          (day) => day.contributionCount > 0
        ).length;

        // Formatuj dane dla ActivityCalendar
        const formattedData = days.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level:
            day.contributionCount > 10
              ? 4
              : day.contributionCount > 5
              ? 3
              : day.contributionCount > 2
              ? 2
              : day.contributionCount > 0
              ? 1
              : 0,
        }));

        setTotalContributions(calendar.totalContributions); // Ustaw łączną liczbę akcji
        setActiveDays(activeDaysCount); // Ustaw liczbę dni z aktywnością
        setData(formattedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Ładowanie danych...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
    <div>
      {/* Komponent kalendarza */}
      <ActivityCalendar
        data={data}
        labels={{
          legend: {
            less: "Mniej",
            more: "Więcej",
          },
          months: [
            "Sty",
            "Lut",
            "Mar",
            "Kwi",
            "Maj",
            "Cze",
            "Lip",
            "Sie",
            "Wrz",
            "Paź",
            "Lis",
            "Gru",
          ],
          weekdays: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "Sb"],
          totalCount: `Łącznie: ${totalContributions} akcji w ${activeDays} dniach`,
        }}
        theme={{
          light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"], // Kolory od najjaśniejszego do najciemniejszego
        }}
      />
    </div>
  );
};

export default Cal;
