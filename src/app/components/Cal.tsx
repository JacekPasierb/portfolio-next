"use client";

import React, {useState, useEffect} from "react";
import ActivityCalendar, {ThemeInput} from "react-activity-calendar";
import {updateBlockSize} from "../utils/functionsHelp";

interface Props {
  data: {date: string; count: number; level: number}[];
  totalContributions: number;
  activeDays: number;
}

const explicitTheme: ThemeInput = {
  dark: ["#f2e7fe", "#d0bfff", "#a77df2", "#7e57c2", "#4a148c"],
};

const Calendar = ({data, totalContributions, activeDays}: Props) => {
  const [blockSize, setBlockSize] = useState(12);
  const [blockMargin, setBlockMargin] = useState(2);

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
