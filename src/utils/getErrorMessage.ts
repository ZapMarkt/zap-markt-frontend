import { AxiosError } from "axios";
import { dictionary } from "./Dictionary";

type ApiErrorResult = {
  statusCode: number;
  errors: ApiError[];
};

type ApiError = {
  key: string;
  error?: string;
};

export function getErrorMessage(error: unknown) {
  if (error instanceof AxiosError) {
    const errorResult = error.response?.data as ApiErrorResult;
    return errorResult.errors.map((error) => getError(error.key));
  }
  return [dictionary.error_UNKNOWN];
}

function getError(key: string) {
  const errorKey = `error_${key}` as keyof typeof dictionary;

  return dictionary[errorKey] ?? dictionary.error_UNKNOWN;
}
