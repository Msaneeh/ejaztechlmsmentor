import React from "react";
import { ClipboardList, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const TasksHeader = ({
  total,
  pendingCount,
  query,
  onQueryChange,
  onCreateClick,
}) => {
  return (
    <div className="shrink-0">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-muted-strong" />
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Submissions
            </h1>
          </div>
          <p className="mt-1 text-sm text-muted-text">
            {total} submissions from your mentees · {pendingCount} pending review
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search */}
          <div className="relative w-full sm:w-56">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-text" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search project or mentee..."
              className="w-full rounded-full border border-border-brand bg-surface2 py-2 pl-9 pr-4 text-xs text-primary-text outline-none transition-colors focus:border-border"
            />
          </div>

          
          <Button
            onClick={onCreateClick}
            className="btn-primary h-9 shrink-0 rounded-full px-4 text-xs font-medium"
          >
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            Create Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TasksHeader;