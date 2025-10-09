export function formatTime (timestamp) {
  const d = new Date(timestamp);
  return d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "short",
    day: "numeric",
  });
};