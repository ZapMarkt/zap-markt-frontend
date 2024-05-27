import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { BackgroundUploadButton } from "./BackgroundUploadButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscriptionPlanFormSchema } from "../libs/zod/SubscriptionPlanFormShema";
import { ISubscriptionPlanFormSchema } from "../types/ISubscriptionPlanFormSchema";
import { DatePicker } from "./DatePicker";
import dayjs from "dayjs";
import { CurrencyMask } from "../libs/imask/CurrencyMask";
import { parseCurrency } from "../utils/parseCurrency";

export function SubscriptionPlanForm() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISubscriptionPlanFormSchema>({
    resolver: zodResolver(SubscriptionPlanFormSchema),
    defaultValues: {
      subscriptionPlan: "Premium",
      packageValue: "1",
      sendDate: dayjs(),
      dueDate: dayjs().add(1, "day"),
    },
  });

  const subscriptionPlan = watch("subscriptionPlan");
  const packageValue = watch("packageValue");

  function onSubmit(inputData: ISubscriptionPlanFormSchema) {
    const data = {
      ...inputData,
      packageValue: parseCurrency(inputData.packageValue),
      dueDate: inputData.dueDate.toISOString(),
      sendDate: inputData.sendDate.toISOString(),
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        rowSpacing={2.5}
        columnSpacing={5}
      >
        <Grid
          item
          xl={6}
        >
          <FormControl
            fullWidth
            size="small"
            variant="filled"
          >
            <InputLabel>Pacote de assinatura</InputLabel>
            <Select
              value={subscriptionPlan}
              {...register("subscriptionPlan")}
            >
              <MenuItem value="Premium">Premium</MenuItem>
              <MenuItem value="Free">Free</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xl={6}
        >
          <TextField
            label="Valor do pacote"
            variant="filled"
            size="small"
            fullWidth
            color={errors.packageValue ? "error" : "primary"}
            helperText={errors.packageValue?.message}
            error={!!errors.packageValue?.message}
            {...register("packageValue")}
            InputProps={{
              inputComponent: CurrencyMask as any,
              value: packageValue,
            }}
          />
        </Grid>
        <Grid
          item
          xl={6}
        >
          <DatePicker
            name={"sendDate"}
            label={"Data de emissão"}
            control={control}
            datePickerProps={{
              readonly: true,
            }}
          />
        </Grid>
        <Grid
          item
          xl={6}
        >
          <DatePicker
            control={control}
            name={"dueDate"}
            label={"Data de vencimento"}
            datePickerProps={{
              minDate: dayjs().add(1, "day"),
            }}
          />
        </Grid>
        <Grid
          item
          xl={6}
          marginBottom={3.75}
        >
          <BackgroundUploadButton />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Enviar boleto
      </Button>
    </form>
  );
}
