export function getInitials(fullName: string | null | undefined): string {
  if (!fullName) return "";

  return fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
