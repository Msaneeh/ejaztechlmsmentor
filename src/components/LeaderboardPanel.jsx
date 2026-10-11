import React from "react";
import LeaderboardRows from "./LeaderboardRows";

const LeaderboardPanel = ({ entries }) => {
  return (
    <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      {/* Header row — just labels */}
      <div className="relative z-10 mb-2 flex shrink-0 items-center justify-between border-b border-border-brand px-3 pb-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-text">
          Rank
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-text">
          XP
        </span>
      </div>

      {/* Scrollable rows */}
      <div className="relative z-10 -mr-2 min-h-0 flex-1 overflow-y-auto pr-2">
        <LeaderboardRows entries={entries} />
      </div>
    </div>
  );
};

export default LeaderboardPanel;