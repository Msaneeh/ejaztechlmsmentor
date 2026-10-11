import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";


const filters = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "approved", label: "Approved" },
  { key: "revision", label: "Needs Redo" },
];

const TasksTab = ({ filter, onFilterChange, pendingCount }) => {
  return (
    <div className="shrink-0">
      <Tabs value={filter} onValueChange={onFilterChange}>
        <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-full bg-surface2 p-1">
          {filters.map((f) => (
            <TabsTrigger
              key={f.key}
              value={f.key}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
            >
              {f.label}
              {f.key === "pending" && pendingCount > 0 && (
                <span className="ml-1.5 rounded-full bg-gold px-1.5 text-[10px] font-bold text-white">
                  {pendingCount}
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TasksTab;