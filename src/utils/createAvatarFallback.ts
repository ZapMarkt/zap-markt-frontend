export function createAvatarFallback(alt: string) {
  let fallback = "";
  alt
    .toUpperCase()
    .split(" ")
    .forEach((char) => {
      if (fallback.length >= 2) {
        return;
      }
      fallback += char.charAt(0);
    });
  return fallback;
}
