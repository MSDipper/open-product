import classNames from "classnames";
import styles from "./Search.module.scss";
import { SearchProps } from "./Search.props";

export const Search = ({ placeholder, width, id, type }: SearchProps) => {
  const SearchClassNames = classNames(styles.component, {
    [styles.small]: width === 'small',
    [styles.medium]: width === 'medium',
    [styles.large]: width === 'large',
  });

  return (
    <input
      type={type}
      id={id}
      className={SearchClassNames}
      placeholder={placeholder}
    />
  );
};

export default Search;
