"use client"; // 🔥 To wymusza, że cały ten komponent działa po stronie klienta

import dynamic from "next/dynamic";
import {ContributionData} from "../serviceAPI/github";

// 🔥 Dynamiczny import Calendar.tsx
const Calendar = dynamic(() => import("./Cal"), {ssr: false});

interface Props {
  data: ContributionData[];
  totalContributions: number;
  activeDays: number;
}

export default function CalendarWrapper({
  data,
  totalContributions,
  activeDays,
}: Props) {
  return (
    <Calendar
      data={data}
      totalContributions={totalContributions}
      activeDays={activeDays}
    />
  );
}
