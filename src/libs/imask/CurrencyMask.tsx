import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { IMaskProps } from "../../types/IMaskProps";

export const CurrencyMask = forwardRef<HTMLInputElement, IMaskProps>(
  ({ onChange, name, ...rest }, ref) => {
    return (
      <IMaskInput
        {...rest}
        mask="R$ value"
        blocks={{
          value: {
            mask: Number,
            scale: 2,
            thousandsSeparator: ".",
            padFractionalZeros: true,
            normalizeZeros: true,
            radix: ",",
            mapToRadix: [","],
            min: 0,
            max: 1000000,
          },
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name, value } })}
      />
    );
  }
);
