import React from "react";
import { ClipboardList, Eye, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubmissionStatusBadge from "@/components/SubmissionStatusBadge";
import { timeAgo } from "@/utils/timeAgo";

const TasksTable = ({ submissions, onView }) => {
  return (
    <div className="glass-panel relative min-h-0 flex-1 overflow-hidden rounded-[2rem] shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      {submissions.length === 0 ? (
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface2">
            <ClipboardList className="h-7 w-7 text-muted-text" />
          </div>
          <p className="text-sm font-semibold text-primary-text">
            No submissions found
          </p>
          <p className="text-xs text-muted-text">
            Try a different filter or search term.
          </p>
        </div>
      ) : (
        <div className="relative z-10 h-full overflow-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="sticky top-0 z-10 bg-surface/80 backdrop-blur-md">
              <tr className="border-b border-border-brand">
                <th className="w-12 px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                  #
                </th>
                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                  Project
                </th>
                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                  Mentee
                </th>
                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                  Submitted
                </th>
                <th className="px-4 py-3 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                  Status
                </th>
                <th className="w-32 px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-muted-text">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {submissions.map((sub, i) => (
                <tr
                  key={sub.id}
                  className="border-b border-border-brand/50 transition-colors hover:bg-surface2/40"
                >
                  <td className="px-4 py-3 text-xs font-medium text-muted-text">
                    {i + 1}
                  </td>

                  <td className="px-4 py-3">
                    <p className="truncate text-sm font-medium text-primary-text">
                      {sub.projectName}
                    </p>
                    <p className="text-[10px] text-muted-text">
                      {sub.phase} • {sub.week} • {sub.xp} XP
                    </p>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-text text-[11px] font-bold text-bg">
                        {sub.menteeInitial}
                      </div>
                      <span className="truncate text-xs text-primary-text">
                        {sub.menteeName}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-3 text-xs text-muted-text">
                    {timeAgo(sub.submittedAt)}
                  </td>

                  <td className="px-4 py-3">
                    <SubmissionStatusBadge status={sub.status} />
                  </td>

                  <td className="px-4 py-3 text-right">
                    <Button
                      onClick={() => onView(sub.id)}
                      className="btn-glass h-8 rounded-full px-3 text-xs font-medium"
                    >
                      <Eye className="mr-1 h-3 w-3" />
                      View
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TasksTable;