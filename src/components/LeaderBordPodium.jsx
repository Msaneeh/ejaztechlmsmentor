import React from "react";
import { Crown, Medal } from "lucide-react";

const LeaderBordPodium = ({ podium }) => {
  return (
    <div className="glass-panel relative w-full overflow-hidden rounded-[2rem] p-4 sm:p-6 shadow-xs shrink-0">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-6">
        {podium.map((entry) => {
          const isFirst = entry.rank === 1;
          const isSecond = entry.rank === 2;
          const isThird = entry.rank === 3;

          const medalColor = isFirst
            ? "bg-gold text-white"
            : isSecond
            ? "bg-primary-text text-bg"
            : "bg-muted-strong text-bg";

          const MedalIcon = isFirst ? Crown : Medal;

          return (
            <div
              key={entry.id}
              className={`flex flex-col items-center gap-2 ${
                isFirst ? "order-2" : isSecond ? "order-1" : "order-3"
              }`}
            >
              {/* Avatar */}
              <div
                className={`relative flex items-center justify-center rounded-full bg-primary-text font-bold text-bg ${
                  isFirst ? "h-16 w-16 text-xl" : "h-12 w-12 text-base"
                }`}
              >
                {entry.name.charAt(0)}
                <span
                  className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-bg text-[9px] font-bold ${medalColor}`}
                >
                  {entry.rank}
                </span>
              </div>

              {/* Name */}
              <div className="flex flex-col items-center">
                <span
                  className={`truncate text-center font-semibold text-primary-text ${
                    isFirst ? "text-sm" : "text-xs"
                  } max-w-[80px]`}
                >
                  {entry.name.split(" ")[0]}
                </span>
                <span className="text-[10px] font-medium text-muted-text">
                  {entry.xp.toLocaleString()} XP
                </span>
              </div>

              {/* Pedestal */}
              <div
                className={`flex items-center justify-center rounded-t-xl ${medalColor} ${
                  isFirst
                    ? "h-20 w-16 sm:w-20"
                    : isSecond
                    ? "h-14 w-14 sm:w-16"
                    : "h-10 w-14 sm:w-16"
                }`}
              >
                <MedalIcon
                  className={`${isFirst ? "h-5 w-5" : "h-4 w-4"} opacity-90`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderBordPodium;