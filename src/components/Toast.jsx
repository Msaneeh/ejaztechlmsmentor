import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, RotateCcw, X } from "lucide-react";

const variantConfig = {
  success: {
    icon: CheckCircle2,
    ring: "border-green-500/30",
    iconColor: "text-green-500",
    bg: "bg-green-500/10",
  },
  warning: {
    icon: AlertCircle,
    ring: "border-gold/40",
    iconColor: "text-gold",
    bg: "bg-gold/10",
  },
  info: {
    icon: RotateCcw,
    ring: "border-red-500/30",
    iconColor: "text-red-500",
    bg: "bg-red-500/10",
  },
};

const Toast = ({ open, message, variant = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  if (!open) return null;

  const cfg = variantConfig[variant] || variantConfig.success;
  const Icon = cfg.icon;

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-in slide-in-from-bottom-2 fade-in duration-200">
      <div
        className={`glass-panel flex items-center gap-3 rounded-2xl border ${cfg.ring} ${cfg.bg} px-4 py-3 pr-3 shadow-lg`}
      >
        <Icon className={`h-4 w-4 shrink-0 ${cfg.iconColor}`} />
        <p className="max-w-xs text-sm font-medium text-primary-text">
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted-text transition-colors hover:bg-surface2 hover:text-primary-text"
          aria-label="Dismiss"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default Toast;