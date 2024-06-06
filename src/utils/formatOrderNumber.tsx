export function formatNumberToHash(number: number): string {
  const paddedNumber = String(number).padStart(6, '0');
  const firstPart = paddedNumber.slice(0, 3);
  const secondPart = paddedNumber.slice(3);
  return `#${firstPart}-${secondPart}`;
}
