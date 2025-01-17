"use client";

import React, {useState, useEffect} from "react";
import ActivityCalendar, {ThemeInput} from "react-activity-calendar";
import useFetchData from "../serviceAPI/github";
import {updateBlockSize} from "../utils/functionsHelp";

const Calendar = () => {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;
  const {data, loading, error, totalContributions, activeDays} =
    useFetchData(username);
console.log("D",username);

  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(2);

  const explicitTheme: ThemeInput = {
    dark: ["#f2e7fe", "#d0bfff", "#a77df2", "#7e57c2", "#4a148c"],
  };

  useEffect(() => {
    updateBlockSize(setBlockSize, setBlockMargin);

    const handleResize = () => {
      updateBlockSize(setBlockSize, setBlockMargin);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Warunki renderowania na podstawie stanu
  if (loading) return <p>Ładowanie danych...</p>;
  if (error) return <p>Błąd: {error}</p>;

  return (
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
      theme={explicitTheme}
      blockSize={blockSize}
      blockMargin={blockMargin}
    />
  );
};

export default Calendar;
