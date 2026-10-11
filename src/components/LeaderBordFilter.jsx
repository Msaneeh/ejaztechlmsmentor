import React from "react";

const LeaderBordFilter = ({ filter, onFilterChange, filters }) => {
  return (
    <div className="flex shrink-0 items-center gap-2">
      {filters.map((f) => (
        <button
          key={f.key}
          type="button"
          onClick={() => onFilterChange(f.key)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
            filter === f.key
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-surface2 text-muted-text hover:bg-surface2/70 hover:text-primary-text"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default LeaderBordFilter;