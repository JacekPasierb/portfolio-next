// useFetchData.ts

import {useState, useEffect} from "react";
interface ContributionData {
  date: string;
  count: number;
  level: number;
}

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

const useFetchData = (username: string) => {
  const [data, setData] = useState<ContributionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState(0);
  const [activeDays, setActiveDays] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const endDateS = new Date();
      const startDateS = new Date();
      startDateS.setFullYear(endDateS.getFullYear() - 1);

      const startDate = startDateS.toISOString();
      const endDate = endDateS.toISOString();

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
        username,
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

        const days = calendar.weeks.flatMap(
          (week: Week) => week.contributionDays
        );

        const activeDaysCount = days.filter(
          (day: ContributionDay) => day.contributionCount > 0
        ).length;

        const formattedData = days.map((day: ContributionDay) => ({
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

        setTotalContributions(calendar.totalContributions);
        setActiveDays(activeDaysCount);
        setData(formattedData);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return {data, loading, error, totalContributions, activeDays};
};

export default useFetchData;
