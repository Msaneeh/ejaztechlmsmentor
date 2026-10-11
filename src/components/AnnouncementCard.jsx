import { Megaphone, AlertCircle, Info } from "lucide-react";
import { timeAgo } from "@/utils/timeAgo";

const priorityConfig = {
  high: {
    label: "High Priority",
    icon: AlertCircle,
    badge: "border-red-500/30 bg-red-500/10 text-red-500",
  },
  normal: {
    label: "Update",
    icon: Megaphone,
    badge: "border-border-brand bg-surface2 text-muted-strong",
  },
  low: {
    label: "FYI",
    icon: Info,
    badge: "border-border-brand bg-surface2 text-muted-text",
  },
};

const AnnouncementCard = ({ announcement }) => {
  const cfg = priorityConfig[announcement.priority] || priorityConfig.normal;
  const Icon = cfg.icon;

  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10">
        {/* Top row — badge + audience + time */}
        <div className="flex flex-wrap items-center gap-2 text-[10px]">
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-medium ${cfg.badge}`}
          >
            <Icon className="h-3 w-3" />
            {cfg.label}
          </span>
          <span className="rounded-full border border-border-brand bg-surface2 px-2.5 py-0.5 font-medium text-muted-strong">
            {announcement.audience}
          </span>
          <span className="text-muted-text">
            {timeAgo(announcement.createdAt)}
          </span>
        </div>

        {/* Title + message */}
        <h3 className="mt-3 text-base font-semibold tracking-tight text-primary-text sm:text-lg">
          {announcement.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-strong">
          {announcement.message}
        </p>

        {/* Author */}
        <p className="mt-3 text-[11px] text-muted-text">
          Posted by{" "}
          <span className="font-medium text-muted-strong">
            {announcement.author}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementCard;