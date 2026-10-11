import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Trophy } from "lucide-react";
import LeaderboardRows from "./LeaderboardRows";

const DashboardLeaderboard = ({ entries }) => {
  return (
    <div className="glass-panel relative flex h-full flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      
      <div className="relative z-10 mb-3 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-muted-strong" />
          <h3 className="text-base font-semibold tracking-tight text-primary-text">
            Leaderboard
          </h3>
        </div>

        <Link
          to="/leaderbord"
          className="btn-glass inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium"
        >
          View All
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      
      <div className="relative z-10 -mr-2 min-h-0 flex-1 overflow-y-auto pr-2">
        <LeaderboardRows entries={entries} />
      </div>
    </div>
  );
};

export default DashboardLeaderboard;