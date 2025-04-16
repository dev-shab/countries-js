export const getLocalTime = (timezone: string): string => {
  const now = new Date();

  const match = timezone.match(/^UTC([+-])?(\d{2})?:?(\d{2})?$/);
  if (!match) {
    if (timezone === "UTC")
      return now.toISOString().slice(0, 19).replace("T", " ");
    throw new Error("Invalid UTC offset format");
  }

  const sign = match[1] === "-" ? -1 : 1;
  const hours = parseInt(match[2] || "0", 10);
  const minutes = parseInt(match[3] || "0", 10);

  const offsetInMinutes = sign * (hours * 60 + minutes);
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
  const localTime = new Date(utcTime + offsetInMinutes * 60000);

  return localTime.toISOString().slice(0, 19).replace("T", " ");
};
