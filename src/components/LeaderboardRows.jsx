import React from "react";
import { Flame } from "lucide-react";

const LeaderboardRows = ({ entries = [], highlightUser = true }) => {
  if (entries.length === 0) {
    return (
      <p className="px-3 py-4 text-center text-xs text-muted-text">
        No entries yet.
      </p>
    );
  }

  return (
    <div className="space-y-1.5">
      {entries.map((entry) => {
        const isUser = highlightUser && entry.isUser;

        return (
          <div
            key={entry.id}
            className={`flex items-center justify-between rounded-xl px-3 py-2 transition-colors ${
              isUser
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
                  {isUser && (
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
        );
      })}
    </div>
  );
};

export default LeaderboardRows;