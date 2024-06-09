import { ElementType, InputHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";

type TextFieldProps = {
  helperText?: string;
  error?: boolean;
  endIcon?: ElementType;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ helperText, error, endIcon: EndIcon, ...rest }, ref) => {
    return (
      <div
        className={`${styles.text__field__container} ${
          error && styles.text__field__container__error
        }`}
      >
        <div>
          <input
            type="text"
            {...rest}
            ref={ref}
          />
          {EndIcon && <EndIcon />}
        </div>
        {helperText && <span>{helperText}</span>}
      </div>
    );
  }
);
