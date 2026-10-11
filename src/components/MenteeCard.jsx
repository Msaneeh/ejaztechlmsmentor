import { Flame, Trophy, ArrowRight } from "lucide-react";

const statusConfig = {
  active: {
    label: "Active",
    badge: "border-green-500/30 bg-green-500/15 text-green-600",
  },
  "at-risk": {
    label: "At Risk",
    badge: "border-gold/40 bg-gold/10 text-gold",
  },
  inactive: {
    label: "Inactive",
    badge: "border-border-brand bg-surface2 text-muted-text",
  },
};

const MenteeCard = ({ mentee, onClick }) => {
  const cfg = statusConfig[mentee.status] || statusConfig.inactive;

  return (
    <button
      type="button"
      onClick={() => onClick(mentee)}
      className="glass-panel group relative w-full overflow-hidden rounded-[2rem] p-4 text-left shadow-xs transition-all hover:border-primary-text/20 sm:p-5 cursor-pointer"
    >
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex flex-col gap-3">
        
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-text text-base font-bold text-bg">
            {mentee.name.charAt(0)}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="truncate text-base font-semibold tracking-tight text-primary-text">
                {mentee.name}
              </h3>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${cfg.badge}`}
              >
                {cfg.label}
              </span>
            </div>

            <p className="mt-0.5 truncate text-xs text-muted-text">
              {mentee.email}
            </p>

            <p className="mt-0.5 truncate text-[11px] text-muted-text">
              {mentee.phase} • {mentee.week}
            </p>
          </div>

          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-text transition-transform group-hover:translate-x-0.5" />
        </div>

        
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
          <span className="inline-flex items-center gap-1">
            <Trophy className="h-3 w-3" />
            #{mentee.rank}
          </span>
          <span className="inline-flex items-center gap-1">
            <Flame className="h-3 w-3" />
            {mentee.streak} day streak
          </span>
          <span>•</span>
          <span>{mentee.xp.toLocaleString()} XP</span>
          <span>•</span>
          <span>Last active: {mentee.lastActive}</span>
        </div>

        
        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface2">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: `${mentee.progress}%` }}
            />
          </div>
          <span className="shrink-0 text-[11px] font-medium text-muted-text">
            {mentee.progress}%
          </span>
        </div>
      </div>
    </button>
  );
};

export default MenteeCard;