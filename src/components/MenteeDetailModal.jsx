import {
  Mail,
  MapPin,
  Calendar,
  Trophy,
  Flame,
  Award,
  ClipboardList,
  HelpCircle,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const statusConfig = {
  active: {
    label: "Active",
    badge: "border-green-500/30 bg-green-500/15 text-green-600",
    avatarRing: "ring-green-500/40",
  },
  "at-risk": {
    label: "At Risk",
    badge: "border-gold/40 bg-gold/10 text-gold",
    avatarRing: "ring-gold/50",
  },
  inactive: {
    label: "Inactive",
    badge: "border-border-brand bg-surface2 text-muted-text",
    avatarRing: "ring-border-brand",
  },
};

const submissionStatusConfig = {
  pending: "border-gold/40 bg-gold/10 text-gold",
  graded: "border-green-500/30 bg-green-500/15 text-green-600",
};

const MenteeDetailModal = ({
  open,
  mentee,
  onClose,
  onSendMessage,
  onReviewSubmissions,
}) => {
  if (!mentee) return null;

  const cfg = statusConfig[mentee.status] || statusConfig.inactive;

  const stats = [
    { icon: Trophy, label: "Rank", value: `#${mentee.rank}` },
    { icon: TrendingUp, label: "XP", value: mentee.xp.toLocaleString() },
    { icon: Flame, label: "Streak", value: `${mentee.streak} days` },
    { icon: Award, label: "Certs", value: mentee.certificates },
  ];

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="glass-panel flex max-h-[85vh] max-w-lg flex-col overflow-hidden rounded-[1.75rem] border-border-brand p-0">
        
        <DialogHeader className="shrink-0 border-b border-border-brand p-5 pb-4">
          <div className="flex flex-col items-center text-center">
            
            <div
              className={`relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary-text text-2xl font-bold text-bg ring-4 ${cfg.avatarRing}`}
            >
              {mentee.avatar ? (
                <img
                  src={mentee.avatar}
                  alt={mentee.name}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                mentee.name.charAt(0)
              )}
            </div>

            
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <DialogTitle className="text-lg font-semibold tracking-tight text-primary-text">
                {mentee.name}
              </DialogTitle>
              <Badge
                variant="outline"
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${cfg.badge}`}
              >
                {cfg.label}
              </Badge>
            </div>

            
            <div className="mt-2 flex flex-col items-center gap-1 text-[11px] text-muted-text">
              <p className="flex items-center gap-1.5">
                <Mail className="h-3 w-3" />
                {mentee.email}
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                {mentee.location}
              </p>
              <p className="flex items-center gap-1.5">
                <Calendar className="h-3 w-3" />
                Joined{" "}
                {new Date(mentee.joinedDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </DialogHeader>

        
        <div className="min-h-0 flex-1 overflow-y-auto p-5">
          
          {mentee.bio && (
            <p className="rounded-2xl border border-border-brand bg-surface2/60 p-3 text-xs text-muted-strong">
              {mentee.bio}
            </p>
          )}

          
          <div className="mt-4 rounded-2xl border border-border-brand bg-surface2/60 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
              Current Position
            </p>
            <p className="mt-1 text-sm font-medium text-primary-text">
              {mentee.phase}
            </p>
            <p className="text-[11px] text-muted-text">{mentee.week}</p>

            <div className="mt-3 flex items-center gap-3">
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

          
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border-brand bg-surface2/60 p-3 text-center"
                >
                  <Icon className="mx-auto h-4 w-4 text-muted-strong" />
                  <p className="mt-1.5 text-sm font-semibold text-primary-text">
                    {s.value}
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted-text">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>

          
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="rounded-2xl border border-border-brand bg-surface2/60 p-3">
              <div className="flex items-center gap-1.5">
                <ClipboardList className="h-3.5 w-3.5 text-muted-strong" />
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                  Tasks
                </p>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-sm font-semibold text-primary-text">
                    {mentee.tasks.submitted}
                  </p>
                  <p className="text-[10px] text-muted-text">Submitted</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gold">
                    {mentee.tasks.pending}
                  </p>
                  <p className="text-[10px] text-muted-text">Pending</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-600">
                    {mentee.tasks.graded}
                  </p>
                  <p className="text-[10px] text-muted-text">Graded</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border-brand bg-surface2/60 p-3">
              <div className="flex items-center gap-1.5">
                <HelpCircle className="h-3.5 w-3.5 text-muted-strong" />
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                  Quizzes
                </p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-center">
                <div>
                  <p className="text-sm font-semibold text-primary-text">
                    {mentee.quizzes.passed}/{mentee.quizzes.total}
                  </p>
                  <p className="text-[10px] text-muted-text">Passed</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-600">
                    {mentee.quizzes.lastScore ?? "—"}
                    {mentee.quizzes.lastScore ? "%" : ""}
                  </p>
                  <p className="text-[10px] text-muted-text">Last Score</p>
                </div>
              </div>
            </div>
          </div>

        
          {mentee.recentSubmissions?.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                Recent Submissions
              </p>
              <div className="space-y-1.5">
                {mentee.recentSubmissions.map((sub) => {
                  const sCfg = submissionStatusConfig[sub.status];
                  return (
                    <div
                      key={sub.id}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-border-brand bg-surface2/60 p-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium text-primary-text">
                          {sub.title}
                        </p>
                        <p className="text-[10px] text-muted-text">
                          {sub.phase} • {sub.week} •{" "}
                          {new Date(sub.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        {sub.score != null && (
                          <span className="text-xs font-semibold text-green-600">
                            {sub.score}%
                          </span>
                        )}
                        <Badge
                          variant="outline"
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${sCfg}`}
                        >
                          {sub.status === "graded" ? "Graded" : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        
        <DialogFooter className="shrink-0 flex-col gap-2 border-t border-border-brand p-5 sm:flex-row">
          <Button
            variant="ghost"
            onClick={onClose}
            className="btn-glass h-10 w-full rounded-full text-xs font-medium sm:w-auto sm:flex-1"
          >
            Close
          </Button>
          <Button
            onClick={() => onSendMessage(mentee)}
            className="btn-glass h-10 w-full rounded-full text-xs font-medium sm:w-auto sm:flex-1"
          >
            <Mail className="mr-1.5 h-3.5 w-3.5" />
            Message
          </Button>
          <Button
            onClick={() => onReviewSubmissions(mentee)}
            className="btn-primary h-10 w-full rounded-full text-xs font-medium sm:w-auto sm:flex-1"
          >
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            Review Work
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenteeDetailModal;