import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { SupermarketFormSchema } from "../types/SupermarketFormSchema";
import axios from "axios";
import { BackgroundUploadButton } from "./BackgroundUploadButton";
import { ProfileUploadButton } from "./ProfileUploadButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supermarketFormSchema } from "../libs/zod/SupermarketFormSchema";
import { Button } from "./ui/button";

export function SupermarketForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SupermarketFormSchema>({
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

  function onSubmitForm(data: SupermarketFormSchema) {
    console.log(data);
  }

  const cep = watch("cep");
  const password = watch("password");
  const confirmationPassword = watch("confirmationPassword");
  const city = watch("city");
  const state = watch("state");

  async function handleBlurCepField() {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setValue("city", response.data.localidade);
    setValue("state", response.data.uf);
  }

  function handleBlurPasswordConfirmationField() {
    if ((!password && !confirmationPassword) || !password) {
      return;
    }
    if (password !== confirmationPassword) {
      setError("confirmationPassword", { message: "As senhas não coincidem" });
      return;
    }
    clearErrors("confirmationPassword");
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Box
        position={"relative"}
        marginBottom={15.62}
      >
        <BackgroundUploadButton
          {...register("backdrop")}
          onChange={(ev) => console.log(ev)}
        />
        <ProfileUploadButton
          {...register("profile")}
          sx={{
            position: "absolute",
            bottom: -94,
            right: 648,
          }}
        />
      </Box>
      <Box marginBottom={3.75}>
        <Typography
          variant="h2"
          fontSize={24}
          fontWeight={600}
          marginBottom={3.25}
        >
          Dados fiscais
        </Typography>
        <Grid
          container
          rowSpacing={2.5}
          columnSpacing={5}
        >
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Nome do estabelecimento"
              {...register("stablishmentName")}
              color={errors.stablishmentName ? "error" : "success"}
              helperText={errors.stablishmentName?.message}
              error={!!errors.stablishmentName?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="CNPJ"
              {...register("cnpj")}
              helperText={errors.cnpj?.message}
              error={!!errors.cnpj?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Inscrição estadual"
              {...register("stateRegistration")}
              helperText={errors.stateRegistration?.message}
              error={!!errors.stateRegistration?.message}
            /> */}
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={3.25}>
        <Typography
          variant="h2"
          fontSize={24}
          fontWeight={600}
          marginBottom={3.25}
        >
          Dados para contato
        </Typography>
        <Grid
          container
          rowSpacing={2.5}
          columnSpacing={5}
        >
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Celular"
              {...register("cellPhone")}
              helperText={errors.cellPhone?.message}
              error={!!errors.cellPhone?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Telefone"
              {...register("telephone")}
              helperText={errors.telephone?.message}
              error={!!errors.telephone?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Email"
              {...register("email")}
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            /> */}
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={3.25}>
        <Typography
          variant="h2"
          fontSize={24}
          fontWeight={600}
          marginBottom={3.25}
        >
          Endereço
        </Typography>
        <Grid
          container
          rowSpacing={2.5}
          columnSpacing={5}
        >
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="CEP"
              {...register("cep")}
              onBlur={handleBlurCepField}
              helperText={errors.cep?.message}
              error={!!errors.cep?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Rua"
              {...register("street")}
              helperText={errors.street?.message}
              error={!!errors.street?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Número"
              {...register("number")}
              helperText={errors.number?.message}
              error={!!errors.number?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Bairro"
              {...register("neighborhood")}
              helperText={errors.neighborhood?.message}
              error={!!errors.neighborhood?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Cidade"
              {...register("city")}
              color={errors.city ? "error" : "success"}
              helperText={errors.city?.message}
              error={!!errors.city?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Estado"
              {...register("state")}
              helperText={errors.state?.message}
              error={!!errors.state?.message}
            /> */}
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={3.25}>
        <Typography
          variant="h2"
          fontSize={24}
          fontWeight={600}
          marginBottom={3.25}
        >
          Senha de acesso
        </Typography>
        <Grid
          container
          rowSpacing={2.5}
          columnSpacing={5}
        >
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              helperText={errors.password?.message}
              error={!!errors.password?.message}
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Repita a senha"
              type={showConfirmationPassword ? "text" : "password"}
              {...register("confirmationPassword")}
              helperText={errors.confirmationPassword?.message}
              error={!!errors.confirmationPassword?.message}
            /> */}
          </Grid>
        </Grid>
      </Box>
      <Button>Salvar</Button>
    </form>
  );
}
