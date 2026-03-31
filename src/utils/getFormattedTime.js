function getFormattedTime() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  const parts = formatter.formatToParts(now);
  const get = (type) => parts.find((p) => p.type === type)?.value;

  return `${get("month")} ${get("day")}, ${get("year")} at ${get("hour")}:${get("minute")}:${get("second")} ${get("dayPeriod")} UTC+5:30`;
}


export default getFormattedTime