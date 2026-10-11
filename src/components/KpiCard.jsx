import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const trendConfig = {
  up: {
    icon: TrendingUp,
    className: "text-green-500",
  },
  down: {
    icon: TrendingDown,
    className: "text-red-500",
  },
  neutral: {
    icon: Minus,
    className: "text-muted-text",
  },
};

const KpiCard = ({ label, value, delta, trend = "neutral" }) => {
  const t = trendConfig[trend] || trendConfig.neutral;
  const TrendIcon = t.icon;

  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl p-4 shadow-xs">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-dim blur-[40px]" />

      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
          {label}
        </p>
        <p className="mt-1.5 text-2xl font-bold tracking-tight text-primary-text">
          {value}
        </p>
        {delta && (
          <p className={`mt-1 flex items-center gap-1 text-[11px] font-medium ${t.className}`}>
            <TrendIcon className="h-3 w-3" />
            {delta}
          </p>
        )}
      </div>
    </div>
  );
};

export default KpiCard;