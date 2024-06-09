import { ButtonHTMLAttributes, ElementType } from "react";
import styles from "./styles.module.scss";

type ButtonProp = {
  variant?: keyof typeof variants;
  startIcon?: ElementType;
  endIcon?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: styles.primary__button,
  secondary: styles.secondary__button,
  warning: styles.warning__button,
  error: styles.error__button,
  secondary__warning: styles.secondary__warning__button,
};

export const Button = ({
  children,
  variant = "primary",
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...rest
}: ButtonProp) => {
  return (
    <button
      className={`${styles.button} ${variants[variant]}`}
      {...rest}
    >
      {StartIcon && <StartIcon />}
      {children}
      {EndIcon && <EndIcon />}
    </button>
  );
};
