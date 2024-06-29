import { dictionary } from "@/utils/Dictionary";
import { AxiosError } from "axios";

type ApiDefaultError = {
  statusCode: number;
  error: string;
  details: string;
};

export const useError = () => {
  const verifyObject = <T,>(obj: any, keys: Array<keyof T>): T | undefined =>
    keys.map((key) => obj[key]).every((v) => !!v) ? (obj as T) : undefined;

  const getErrorMessage = (key: string) => {
    const errorKey = `error_${key}` as keyof typeof dictionary;
    return dictionary[errorKey] ?? dictionary.error_UNKNOWN;
  };

  const getError = (error: unknown) => {
    if (error instanceof AxiosError) {
      const apiErrorResult = error.response?.data;
      const apiDefaultError = verifyObject<ApiDefaultError>(apiErrorResult, [
        "statusCode",
        "error",
        "details",
      ]);

      if (apiDefaultError) return getErrorMessage(apiDefaultError.error);

      return dictionary.error_UNKNOWN;
    }

    return dictionary.error_UNKNOWN;
  };

  const showError = (error: unknown, fn: (str: string) => void) =>
    fn(getError(error));

  return {
    showError,
  };
};
