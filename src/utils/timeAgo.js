export const timeAgo = (iso) => {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);

  const units = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "min", seconds: 60 },
  ];

  for (const u of units) {
    const value = Math.floor(seconds / u.seconds);
    if (value >= 1) {
      return `${value} ${u.label}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};