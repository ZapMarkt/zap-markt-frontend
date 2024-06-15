export const formatQuantifyNumber = (value: string) => {
  const trimmedValue = value.trim();
  const stringWithDot = trimmedValue.replace(',', '.');
  return stringWithDot;
};
