export function validateCnpj(cnpj: string) {
  const cnpjWithoutSpecialCharacters = cnpj.replace(/\D/g, "");

  if (cnpjWithoutSpecialCharacters.length < 14) {
    return false;
  }

  const checkDigits = cnpjWithoutSpecialCharacters.substring(12, 14);

  const sequenceOfNumbersToValidateTheFirstCheckDigit = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let result = 0;

  for (let i = 0; i < 12; i++) {
    result += +cnpjWithoutSpecialCharacters[i] * sequenceOfNumbersToValidateTheFirstCheckDigit[i];
  }

  let rest = result % 11;

  if (11 - rest !== +checkDigits[0]) {
    return false;
  }

  result = 0;
  rest = 0;
  const sequenceOfNumbersToValidateTheSecondCheckDigit = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  for (let i = 0; i < 13; i++) {
    result += +cnpjWithoutSpecialCharacters[i] * sequenceOfNumbersToValidateTheSecondCheckDigit[i];
  }

  rest = result % 11;

  if (11 - rest !== +checkDigits[1]) {
    return false;
  }

  return true;
}
