import classNames from "classnames";
import styles from "./Input.module.css";

type SizeInput = "normal";
type InputTypeField = "text" | "number";

interface InputProps {
  placeholder?: string;
  size: SizeInput;
  className?: string;
  id: string;
  type: InputTypeField;
}

export const Input = ({ placeholder, size, id, type }: InputProps) => {
  const InputClassNames = classNames(classNames, styles.component, {
    [styles[size || "normal"]]: size,
  });

  return (
    <input
      type={type}
      id={id}
      className={InputClassNames}
      placeholder={placeholder}
    />
  );
};
export default Input;
