import React, { useMemo, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];


const buildMonthGrid = (year, month) => {
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  
  for (let i = 0; i < startDay; i++) cells.push(null);
  
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }
  
  while (cells.length % 7 !== 0) cells.push(null);

  return cells;
};

const toIso = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const MiniCalendar = ({ events = [] }) => {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(toIso(today));

  const cells = useMemo(
    () => buildMonthGrid(viewYear, viewMonth),
    [viewYear, viewMonth]
  );

 
  const eventsByDate = useMemo(() => {
    return events.reduce((acc, ev) => {
      if (!acc[ev.date]) acc[ev.date] = [];
      acc[ev.date].push(ev);
      return acc;
    }, {});
  }, [events]);

  const selectedEvents = eventsByDate[selectedDate] || [];

  const goPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const monthLabel = new Date(viewYear, viewMonth).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const todayIso = toIso(today);

  return (
    <div className="glass-panel relative flex h-full flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      
      <div className="relative z-10 mb-3 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-strong" />
          <h3 className="text-base font-semibold tracking-tight text-primary-text">
            Calendar
          </h3>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={goPrevMonth}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-colors hover:bg-surface2/70 hover:text-primary-text"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={goNextMonth}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-colors hover:bg-surface2/70 hover:text-primary-text"
            aria-label="Next month"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

     
      <p className="relative z-10 mb-2 shrink-0 text-xs font-medium text-muted-strong">
        {monthLabel}
      </p>

      
      <div className="relative z-10 mb-1 grid shrink-0 grid-cols-7 gap-1">
        {DAYS_OF_WEEK.map((day, i) => (
          <div
            key={i}
            className="text-center text-[10px] font-semibold uppercase tracking-wider text-muted-text"
          >
            {day}
          </div>
        ))}
      </div>

      
      <div className="relative z-10 grid shrink-0 grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) return <div key={i} />;

          const iso = toIso(date);
          const isToday = iso === todayIso;
          const isSelected = iso === selectedDate;
          const hasEvents = !!eventsByDate[iso];

          return (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedDate(iso)}
              className={`relative flex h-8 w-full items-center justify-center rounded-lg text-xs font-medium transition-colors ${
                isSelected
                  ? "bg-primary-text text-bg"
                  : isToday
                  ? "border border-primary-text/40 text-primary-text"
                  : "text-muted-strong hover:bg-surface2"
              }`}
            >
              {date.getDate()}
              {hasEvents && !isSelected && (
                <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-gold" />
              )}
            </button>
          );
        })}
      </div>

      
      <div className="relative z-10 mt-4 min-h-0 flex-1 overflow-y-auto">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-text">
          {new Date(selectedDate).toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
          })}
        </p>

        {selectedEvents.length === 0 ? (
          <p className="text-xs text-muted-text">No events scheduled.</p>
        ) : (
          <div className="space-y-1.5">
            {selectedEvents.map((ev, i) => (
              <div
                key={i}
                className="rounded-xl border border-border-brand bg-surface2/60 p-2.5"
              >
                <p className="text-xs font-medium text-primary-text">
                  {ev.title}
                </p>
                <p className="mt-0.5 text-[10px] text-muted-text">
                  {ev.time} • {ev.cohort}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCalendar;