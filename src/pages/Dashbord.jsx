import React from "react";
import MentorHero from "@/components/MentorHero";
import KpiCard from "@/components/KpiCard";
import DashboardLeaderboard from "@/components/DashboardLeaderboard";
import MiniCalendar from "@/components/MiniCalendar";
import {
  mentorInfo,
  mentorKpis,
  calendarEvents,
} from "@/mockData/mentorDashboardData";
import { leaderboardData } from "@/mockData/leaderboardData";

const Dashbord = () => {
  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      <div className="shrink-0">
        <MentorHero mentorInfo={mentorInfo} />
      </div>

      <div className="grid shrink-0 grid-cols-2 gap-3 lg:grid-cols-4">
        {mentorKpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            delta={kpi.delta}
            trend={kpi.trend}
          />
        ))}
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="min-h-0 lg:col-span-2">
          <DashboardLeaderboard entries={leaderboardData.slice(0, 7)} />
        </div>
        <div className="min-h-0">
          <MiniCalendar events={calendarEvents} />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;