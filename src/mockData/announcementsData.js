export const announcementsData = [
  {
    id: "ann_001",
    title: "Week 3 Evaluation Rescheduled",
    message:
      "This week's evaluation session has been moved to Friday 4 PM. Please update your calendars.",
    audience: "Cohort 3",
    priority: "high", // low | normal | high
    author: "Dr. Amina Hassan",
    createdAt: "2026-10-04T09:30:00Z",
  },
  {
    id: "ann_002",
    title: "New Resource: Scikit-Learn Cheat Sheet",
    message:
      "A comprehensive cheat sheet covering the most-used estimators is now available in Phase 2 resources.",
    audience: "Cohort 3",
    priority: "normal",
    author: "Dr. Amina Hassan",
    createdAt: "2026-10-03T14:15:00Z",
  },
  {
    id: "ann_003",
    title: "Office Hours This Thursday",
    message:
      "Open Q&A session at 6 PM. Bring your questions about the current capstone project.",
    audience: "All Cohorts",
    priority: "low",
    author: "Dr. Amina Hassan",
    createdAt: "2026-10-02T11:00:00Z",
  },
];

export const audienceOptions = [
  "All Cohorts",
  "Cohort 2",
  "Cohort 3",
  "Cohort 4",
];

export const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
];