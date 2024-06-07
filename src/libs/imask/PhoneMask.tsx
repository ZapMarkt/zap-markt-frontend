import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { IMaskProps } from "../../types/IMaskProps";

export const PhoneMask = forwardRef<HTMLInputElement, IMaskProps>(
  ({ onChange, name, ...rest }, ref) => {
    return (
      <IMaskInput
        {...rest}
        mask="(00) 0 0000-0000"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name, value } })}
      />
    );
  }
);
