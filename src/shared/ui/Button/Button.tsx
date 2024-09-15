import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const ButtonAlt: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cn(styles.component, className)} {...props}>
      {children}
    </button>
  );
};

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.component, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
