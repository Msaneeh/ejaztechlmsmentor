import React from "react";
import { TrendingUp } from "lucide-react";

const RanksHeroCard = ({ currentUser }) => {
  return (
    <div className="glass-panel relative w-full overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs shrink-0">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-text text-lg font-bold text-bg">
            {currentUser.name.charAt(0)}
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-bg bg-gold text-[10px] font-bold text-white">
              #{currentUser.rank}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-primary-text">
              {currentUser.name}
            </span>
            <span className="text-xs text-muted-text">
              {currentUser.xp.toLocaleString()} XP • {currentUser.streak} day streak
            </span>
          </div>
        </div>

        
        <div className="flex flex-col gap-1.5 sm:items-end">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-text">
            <TrendingUp className="h-3.5 w-3.5 text-green-500" />
            <span>
              <span className="font-semibold text-primary-text">
                {currentUser.xpToNextRank} XP
              </span>{" "}
              to rank up
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface2 sm:w-40">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: "70%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RanksHeroCard;