import { CheckCircle2, Clock, RotateCcw } from "lucide-react";

const statusConfig = {
  pending: {
    label: "Pending",
    icon: Clock,
    className: "border-gold/40 bg-gold/10 text-gold",
  },
  approved: {
    label: "Approved",
    icon: CheckCircle2,
    className: "border-green-500/30 bg-green-500/15 text-green-600",
  },
  revision: {
    label: "Needs Redo",
    icon: RotateCcw,
    className: "border-red-500/30 bg-red-500/10 text-red-500",
  },
};

const SubmissionStatusBadge = ({ status }) => {
  const cfg = statusConfig[status] || statusConfig.pending;
  const Icon = cfg.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${cfg.className}`}
    >
      <Icon className="h-3 w-3" />
      {cfg.label}
    </span>
  );
};

export default SubmissionStatusBadge;