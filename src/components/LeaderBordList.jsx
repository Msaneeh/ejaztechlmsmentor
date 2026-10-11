import React from "react";
import { Flame } from "lucide-react";

const LeaderBordList = ({ entries }) => {
  return (
    <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      
      <div className="relative z-10 mb-2 flex shrink-0 items-center justify-between border-b border-border-brand px-3 pb-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-text">
          Rank
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-text">
          XP
        </span>
      </div>

      
      <div className="relative z-10 -mr-2 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-2">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className={`flex items-center justify-between rounded-xl px-3 py-2 transition-colors ${
              entry.isUser
                ? "border border-border-brand bg-surface2"
                : "hover:bg-surface2/60"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold ${
                  entry.rank <= 3
                    ? "bg-gold text-white"
                    : "bg-surface2 text-muted-text"
                }`}
              >
                {entry.rank}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-primary-text">
                  {entry.name}
                  {entry.isUser && (
                    <span className="ml-2 text-[10px] font-normal text-muted-text">
                      (you)
                    </span>
                  )}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-muted-text">
                  <Flame className="h-3 w-3" />
                  {entry.streak} day streak
                </span>
              </div>
            </div>
            <span className="text-xs font-semibold text-muted-strong">
              {entry.xp.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBordList;