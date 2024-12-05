export function formatCellPhone(cellPhone: string) {
  return cellPhone
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}
