export const formatCurrency = (
  event: React.FormEvent<HTMLInputElement>,
): void => {
  const input = event.currentTarget;
  const onlyDigits = input.value
    .split('')
    .filter((s) => /\d/.test(s))
    .join('')
    .padStart(3, '0');
  const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2);
  const formattedValue = maskCurrency(parseFloat(digitsFloat));
  input.value = formattedValue;
};

const maskCurrency = (
  valor: number,
  locale: string = 'pt-BR',
  currency: string = 'BRL',
): string => {
  const formattedValue = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(valor);

  const valueWithoutSymbol = formattedValue.replace(/[^\d.,-]/g, '');
  return valueWithoutSymbol;
};
