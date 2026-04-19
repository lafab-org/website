export function htmlDateString(date) {
  return new Date(date).toISOString().split("T")[0];
}

export function readableDate(date) {
  return new Date(date).toLocaleDateString("fr-FR", { dateStyle: "long" });
}
