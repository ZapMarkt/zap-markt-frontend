export function parseCurrency(value: string) {
  return parseFloat(value.replace("R$ ", "").replace(".", "").replace(",", "."));
}
