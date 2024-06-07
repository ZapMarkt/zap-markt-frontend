import { Box, Grid, TextField, Typography } from "@mui/material";
import { CPFMask } from "../libs/imask/CPFMask";
import { PhoneMask } from "../libs/imask/PhoneMask";

export function UserForm() {
  return (
    <form>
      <Box marginBottom={3.75}>
        <Typography
          variant="h2"
          fontSize={24}
          fontWeight={600}
          marginBottom={3.25}
        >
          Dados pessoais
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
              label="Nome"
              variant="filled"
              size="small"
              fullWidth
              disabled
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="CPF"
              variant="filled"
              size="small"
              fullWidth
              disabled
              InputProps={{
                inputComponent: CPFMask as any,
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={3.75}>
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
              InputProps={{
                inputComponent: PhoneMask as any,
              }}
              disabled
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
              disabled
            />
          </Grid>
          <Grid
            item
            xl={6}
          >
            <TextField
              label="Origem do cadastro"
              variant="filled"
              size="small"
              fullWidth
              disabled
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
