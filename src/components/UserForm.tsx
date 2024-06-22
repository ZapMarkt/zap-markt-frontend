import { Box, Grid, Typography } from "@mui/material";

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
            {/* <TextField
              placeholder="Nome"
              disabled
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="CPF"
              disabled
            /> */}
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
            {/* <TextField
              placeholder="Celular"
              disabled
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Email"
              disabled
            /> */}
          </Grid>
          <Grid
            item
            xl={6}
          >
            {/* <TextField
              placeholder="Origem do cadastro"
              disabled
            /> */}
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
