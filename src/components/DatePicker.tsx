import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Control, Controller, FieldPath } from "react-hook-form";
import { ISubscriptionPlanFormSchema } from "../types/ISubscriptionPlanFormSchema";
import { Dayjs } from "dayjs";
import "dayjs/locale/pt";
import { forwardRef } from "react";

type CustomDatePickerProps = {
  name: FieldPath<ISubscriptionPlanFormSchema>;
  label: string;
  control: Control<ISubscriptionPlanFormSchema>;
  datePickerProps?: {
    minDate?: Dayjs;
    readonly?: boolean;
  };
};

export const DatePicker = forwardRef<HTMLInputElement, CustomDatePickerProps>(
  ({ name, label, control, datePickerProps }, ref) => {
    return (
      <Controller
        name={name}
        control={control}
        render={(params) => (
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="pt"
          >
            <MuiDatePicker
              value={params.field.value}
              label={label}
              format="DD/MM/YYYY"
              views={["day", "month", "year"]}
              onChange={params.field.onChange}
              minDate={datePickerProps?.minDate}
              readOnly={datePickerProps?.readonly}
              ref={ref}
              slotProps={{
                textField: {
                  error: !!params.fieldState.error,
                  helperText: params.fieldState.error?.message,
                  variant: "filled",
                  size: "small",
                  fullWidth: true,
                  color: "primary",
                  value: params.field.value,
                },
              }}
            />
          </LocalizationProvider>
        )}
      />
    );
  }
);
