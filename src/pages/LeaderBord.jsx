import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, ArrowLeft } from "lucide-react";
import LeaderBordFilter from "@/components/LeaderBordFilter";
import RanksHeroCard from "@/components/RanksHeroCard";
import LeaderBordPodium from "@/components/LeaderBordPodium";
import LeaderboardPanel from "@/components/LeaderboardPanel";
import { leaderboardData, currentUser } from "@/mockData/leaderboardData";

const LeaderBord = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Time" },
    { key: "week", label: "This Week" },
    { key: "month", label: "This Month" },
  ];

  const podium = [leaderboardData[1], leaderboardData[0], leaderboardData[2]];
  const listRest = leaderboardData.slice(3);

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Page header */}
      <div className="shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-muted-strong" />
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Leaderboard
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          See how you stack up against {currentUser.totalUsers} learners.
        </p>
      </div>

      <RanksHeroCard currentUser={currentUser} />

      <LeaderBordFilter
        filter={filter}
        onFilterChange={setFilter}
        filters={filters}
      />

      <LeaderBordPodium podium={podium} />

      <LeaderboardPanel entries={listRest} />
    </div>
  );
};

export default LeaderBord;