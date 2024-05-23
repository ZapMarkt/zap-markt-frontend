import { zodResolver } from "@hookform/resolvers/zod";
import { supermarketFormSchema } from "../libs/zod/SupermarketFormSchema";
import { useForm } from "react-hook-form";
import { SupermarketFormSchema } from "../types/SupermarketFormSchema";

export function useValidateSupermarketForm() {
  const { register, handleSubmit, watch, setValue, setError, clearErrors, formState } =
    useForm<SupermarketFormSchema>({
      resolver: zodResolver(supermarketFormSchema),
      defaultValues: {
        stablishmentName: "",
        cnpj: "",
        stateRegistration: "",
        cellPhone: "",
        telephone: "",
        email: "",
        cep: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        password: "",
        confirmationPassword: "",
      },
    });

  const cnpj = watch("cnpj");
  const cellPhone = watch("cellPhone");
  const telephone = watch("telephone");
  const cep = watch("cep");
  const password = watch("password");
  const confirmationPassword = watch("confirmationPassword");
  const background = watch("backdrop");

  function handleBluePasswordConfirmationField() {
    if ((!password && !confirmationPassword) || !password) {
      return;
    }
    if (password !== confirmationPassword) {
      setError("confirmationPassword", { message: "As senhas não coincidem" });
      return;
    }
    clearErrors("confirmationPassword");
  }

  return {
    fieldValue: {
      cnpj,
      cellPhone,
      telephone,
      cep,
      password,
      confirmationPassword,
      background,
    },
    ref: register,
    handleSubmit,
    setValue,
    formState,
    handleBluePasswordConfirmationField,
  };
}
