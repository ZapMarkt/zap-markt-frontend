import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { BackgroundUploadButton } from "../components/BackgroundUploadButton";
import { grey } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { SharedProductFormSchema } from "../types/SharedProductsFormSchema.";
import { zodResolver } from "@hookform/resolvers/zod";
import { sharedProductFormSchema } from "../libs/zod/sharedProductFormSchema";

type SharedProductFormProps = {
  handleClickClose: () => void;
};

export function SharedProductForm({ handleClickClose }: SharedProductFormProps) {
  const { register } = useForm<SharedProductFormSchema>({
    resolver: zodResolver(sharedProductFormSchema),
  });

  return (
    <form>
      <Typography
        variant="h1"
        fontSize={38}
        fontWeight={600}
        marginBottom={1.87}
        display="flex"
        alignItems="center"
        gap={1.25}
      >
        <IconButton onClick={handleClickClose}>
          <ArrowBackIcon />
        </IconButton>
        Novo produto
      </Typography>
      <Divider
        sx={{
          marginBottom: 3.75,
        }}
      />
      <Grid
        container
        spacing={3.75}
        marginBottom={2.5}
      >
        <Grid
          item
          xl={6}
        >
          <TextField
            label="Código de barras"
            size="small"
            fullWidth
            {...register("barCode")}
          />
        </Grid>
        <Grid
          item
          xl={6}
        >
          <FormControl fullWidth>
            <InputLabel>Medida</InputLabel>
            <Select
              variant="outlined"
              size="small"
              label="Medida"
              {...register("measure")}
            >
              <MenuItem value="Premium">Premium</MenuItem>
              <MenuItem value="Free">Free</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <BackgroundUploadButton />
      <TextField
        label="Nome do produto"
        size="small"
        fullWidth
        placeholder="Digite aqui"
        {...register("productName")}
        sx={{
          marginBlock: 2.5,
        }}
      />
      <TextField
        label="Descrição"
        size="small"
        fullWidth
        placeholder="Digite aqui"
        {...register("description")}
      />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={60}
        paddingTop={2.5}
        paddingBottom={3.75}
        paddingInline={3.75}
        display="flex"
        justifyContent="end"
        gap={3}
        borderTop={`1px solid ${grey[300]}`}
      >
        <Button onClick={handleClickClose}>Cancelar</Button>
        <Button
          variant="contained"
          color="primary"
        >
          Salvar
        </Button>
      </Box>
    </form>
  );
}
