import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useValidateSupermarketForm } from "../hooks/useValidateSupermarketForm";
import { SupermarketFormSchema } from "../types/SupermarketFormSchema";
import axios from "axios";
import { CNPJMask } from "../libs/imask/CNPJMask";
import { PhoneMask } from "../libs/imask/PhoneMask";
import { CEPMask } from "../libs/imask/CEPMask";
import { BackgroundUploadButton } from "./BackgroundUploadButton";
import { ProfileUploadButton } from "./ProfileUploadButton";

export function SupermarketForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

  const {
    ref,
    handleSubmit,
    setValue,
    fieldValue,
    formState: { errors },
    handleBluePasswordConfirmationField,
  } = useValidateSupermarketForm();

  const { cep } = fieldValue;

  function onSubmitForm(data: SupermarketFormSchema) {
    console.log(data);
  }

  async function handleBlur() {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setValue("city", response.data.localidade);
    setValue("state", response.data.uf);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Box
        position={"relative"}
        marginBottom={15.62}
      >
        <BackgroundUploadButton
          {...ref("backdrop")}
          onChange={(ev) => console.log(ev)}
        />
        <ProfileUploadButton {...ref("profile")} />
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
            <TextField
              label="Nome do estabelecimento"
              variant="filled"
              size="small"
              fullWidth
              {...ref("stablishmentName")}
              color={errors.stablishmentName ? "error" : "success"}
              helperText={errors.stablishmentName?.message}
              error={!!errors.stablishmentName?.message}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="CNPJ"
              variant="filled"
              size="small"
              fullWidth
              {...ref("cnpj")}
              color={errors.cnpj ? "error" : "success"}
              helperText={errors.cnpj?.message}
              error={!!errors.cnpj?.message}
              InputProps={{
                inputComponent: CNPJMask as any,
              }}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Inscrição estadual"
              variant="filled"
              size="small"
              fullWidth
              {...ref("stateRegistration")}
              color={errors.stateRegistration ? "error" : "success"}
              helperText={errors.stateRegistration?.message}
              error={!!errors.stateRegistration?.message}
            />
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
            <TextField
              label="Celular"
              variant="filled"
              size="small"
              fullWidth
              {...ref("cellPhone")}
              color={errors.cellPhone ? "error" : "success"}
              helperText={errors.cellPhone?.message}
              error={!!errors.cellPhone?.message}
              InputProps={{
                inputComponent: PhoneMask as any,
              }}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Telefone"
              variant="filled"
              size="small"
              fullWidth
              {...ref("telephone")}
              color={errors.telephone ? "error" : "success"}
              helperText={errors.telephone?.message}
              error={!!errors.telephone?.message}
              InputProps={{
                inputComponent: PhoneMask as any,
              }}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Email"
              variant="filled"
              size="small"
              fullWidth
              {...ref("email")}
              color={errors.email ? "error" : "success"}
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            />
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
            <TextField
              label="CEP"
              variant="filled"
              size="small"
              fullWidth
              {...ref("cep")}
              onBlur={handleBlur}
              color={errors.cep ? "error" : "success"}
              helperText={errors.cep?.message}
              error={!!errors.cep?.message}
              InputProps={{
                inputComponent: CEPMask as any,
              }}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Rua"
              variant="filled"
              size="small"
              fullWidth
              {...ref("street")}
              color={errors.street ? "error" : "success"}
              helperText={errors.street?.message}
              error={!!errors.street?.message}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Número"
              variant="filled"
              size="small"
              fullWidth
              {...ref("number")}
              color={errors.number ? "error" : "success"}
              helperText={errors.number?.message}
              error={!!errors.number?.message}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Bairro"
              variant="filled"
              size="small"
              fullWidth
              {...ref("neighborhood")}
              color={errors.neighborhood ? "error" : "success"}
              helperText={errors.neighborhood?.message}
              error={!!errors.neighborhood?.message}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Cidade"
              variant="filled"
              size="small"
              fullWidth
              {...ref("city")}
              color={errors.city ? "error" : "success"}
              helperText={errors.city?.message}
              error={!!errors.city?.message}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Estado"
              variant="filled"
              size="small"
              fullWidth
              {...ref("state")}
              color={errors.state ? "error" : "success"}
              helperText={errors.state?.message}
              error={!!errors.state?.message}
            />
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
            <TextField
              label="Senha"
              variant="filled"
              size="small"
              fullWidth
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityIcon color="action" /> : <VisibilityOffIcon />}
                  </IconButton>
                ),
              }}
              {...ref("password")}
              color={errors.password ? "error" : "success"}
              helperText={errors.password?.message}
              error={!!errors.password?.message}
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Repita a senha"
              variant="filled"
              size="small"
              fullWidth
              type={showConfirmationPassword ? "text" : "password"}
              InputProps={{
                onBlur: handleBluePasswordConfirmationField,
                endAdornment: (
                  <IconButton onClick={() => setShowConfirmationPassword((prev) => !prev)}>
                    {showConfirmationPassword ? (
                      <VisibilityIcon color="action" />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                ),
              }}
              {...ref("confirmationPassword")}
              color={errors.confirmationPassword ? "error" : "success"}
              helperText={errors.confirmationPassword?.message}
              error={!!errors.confirmationPassword?.message}
            />
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Salvar
      </Button>
    </form>
  );
}
