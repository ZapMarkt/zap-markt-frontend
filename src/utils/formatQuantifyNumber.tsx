export const formatQuantifyNumber = (value: string) => {
  const trimmedValue = value.trim();
  const stringWithDot = trimmedValue.replace(',', '.');
  if (stringWithDot.length > 3) {
    const integerValue = parseFloat(stringWithDot);
    const formattedValue = integerValue.toLocaleString('pt-BR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4,
    });
    return formattedValue;
  }
  return stringWithDot;
};
