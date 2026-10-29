const TIME_ZONE = "Africa/Nairobi";

// "19 July 2026" — formatted in Nairobi time so server output is deterministic.
export function formatDate(iso, options = {}) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TIME_ZONE,
    ...options,
  }).format(date);
}

// "2026-10-29" for today's date in Nairobi.
export function todayInNairobi() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(new Date());
}
