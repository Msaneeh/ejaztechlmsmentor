import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  RotateCcw,
  Clock,
  Trophy,
  BookOpen,
  Mail,
  Link as LinkIcon,
  Globe,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SubmissionStatusBadge from "@/components/SubmissionStatusBadge";
import Toast from "@/components/Toast";
import { mentorTasksData } from "@/mockData/mentorTasksData";
import { timeAgo } from "@/utils/timeAgo";

const MentorTaskDetail = () => {
  const { submissionId } = useParams();
  const navigate = useNavigate();

  const submission = mentorTasksData.find((s) => s.id === submissionId);

  const [grade, setGrade] = useState(submission?.grade ?? "");
  const [feedback, setFeedback] = useState(submission?.feedback ?? "");
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState({ open: false, message: "", variant: "success" });

  if (!submission) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface2">
          <AlertCircle className="h-7 w-7 text-muted-text" />
        </div>
        <h1 className="text-lg font-semibold text-primary-text">
          Submission not found
        </h1>
        <p className="text-sm text-muted-text">
          This submission doesn't exist or was removed.
        </p>
        <Button
          onClick={() => navigate("/mentor/tasks")}
          className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
        >
          ← Back to Submissions
        </Button>
      </div>
    );
  }

  const handleSave = (newStatus, toastMessage, toastVariant) => {
    // TODO: PATCH /api/submissions/:id
    console.log("Saving submission:", {
      id: submission.id,
      grade: Number(grade),
      feedback,
      status: newStatus,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    setToast({
      open: true,
      message: toastMessage,
      variant: toastVariant,
    });
  };

  const handleApprove = () => {
    handleSave(
      "approved",
      `Submission approved${grade ? ` with ${grade}%` : ""}.`,
      "success"
    );
  };

  const handleRequestRevision = () => {
    handleSave(
      "revision",
      "Revision requested. Mentee has been notified.",
      "info"
    );
  };

  const isGraded = submission.status !== "pending";

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Page header (unchanged) */}
      <div className="shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate text-xl font-semibold tracking-tight text-primary-text sm:text-2xl">
                {submission.projectName}
              </h1>
              <SubmissionStatusBadge status={submission.status} />
              {saved && (
                <Badge
                  variant="outline"
                  className="rounded-full border-green-500/30 bg-green-500/15 px-2.5 py-0.5 text-[10px] font-medium text-green-600"
                >
                  ✓ Saved
                </Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-text">
              {submission.phase} • {submission.week} • {submission.xp} XP
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable content (unchanged) */}
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
        {/* Mentee card */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-text text-base font-bold text-bg">
                {submission.menteeInitial}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight text-primary-text">
                  {submission.menteeName}
                </p>
                <p className="flex items-center gap-1 text-[11px] text-muted-text">
                  <Mail className="h-3 w-3" />
                  {submission.menteeEmail}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-text">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Submitted {timeAgo(submission.submittedAt)}
              </span>
              {submission.grade != null && (
                <span className="inline-flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  Current grade: {submission.grade}%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Submission content card */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-muted-strong" />
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                Submission
              </p>
            </div>

            <h2 className="mt-2 text-base font-semibold tracking-tight text-primary-text">
              {submission.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-strong">
              {submission.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {submission.repoLink && (
                <a
                  href={submission.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glass inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium"
                >
                  <LinkIcon className="h-3.5 w-3.5" />
                  Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {submission.demoLink && (
                <a
                  href={submission.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glass inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium"
                >
                  <Globe className="h-3.5 w-3.5" />
                  Live Demo
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Grading form card */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
          <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-1.5">
              <Trophy className="h-4 w-4 text-muted-strong" />
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                Grading
              </p>
            </div>

            <div>
              <label
                htmlFor="grade"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Score (0–100)
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="grade"
                  type="number"
                  min="0"
                  max="100"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  placeholder="e.g. 85"
                  className="w-28 rounded-xl border border-border-brand bg-surface2 px-3 py-2 text-sm text-primary-text outline-none focus:border-border"
                />
                <span className="text-xs text-muted-text">
                  {isGraded
                    ? "Previously graded — you can update."
                    : "Assign a score between 0 and 100."}
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="feedback"
                className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-text"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                rows={5}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write constructive feedback for the mentee..."
                className="w-full resize-none rounded-xl border border-border-brand bg-surface2 px-3 py-2.5 text-sm text-primary-text outline-none focus:border-border"
              />
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
              <Button
                variant="ghost"
                onClick={() => navigate("/mentor/tasks")}
                className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
              >
                Cancel
              </Button>

              <Button
                onClick={handleRequestRevision}
                className="h-9 rounded-full border border-red-500/30 bg-red-500/10 px-4 text-xs font-medium text-red-500 transition-colors hover:bg-red-500/20"
              >
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                Request Revision
              </Button>

              <Button
                onClick={handleApprove}
                className="h-9 rounded-full bg-green-600 px-4 text-xs font-medium text-white transition-colors hover:bg-green-700"
              >
                <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
                Approve
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <Toast
        open={toast.open}
        message={toast.message}
        variant={toast.variant}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
      />
    </div>
  );
};

export default MentorTaskDetail;