import {
  Box,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { BackgroundUploadButton } from "../components/BackgroundUploadButton";
import { grey } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { SharedProductFormSchema } from "../types/SharedProductsFormSchema.";
import { zodResolver } from "@hookform/resolvers/zod";
import { sharedProductFormSchema } from "../libs/zod/sharedProductFormSchema";
import { TextField } from "./TextField";
import { Button } from "./Button";

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
            placeholder="Código de barras"
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
        placeholder="Nome do produto"
        {...register("productName")}
      />
      <TextField
        placeholder="Descrição"
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
        <Button
          variant="secondary"
          onClick={handleClickClose}
        >
          Cancelar
        </Button>
        <Button>Salvar</Button>
      </Box>
    </form>
  );
}
