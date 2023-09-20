import { ReactElement } from "react";
import styles from "./Input.module.css";
import cn from "classnames";

interface Props {
  classNames?: string;
  value: string;
  prefix?: ReactElement;
  postfix?: ReactElement;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: React.FC<Props> = ({
  classNames,
  value,
  prefix,
  postfix,
  onChange,
  placeholder,
}) => {
  return (
    <div className={cn(styles.Input, classNames)}>
      {prefix}
      <input
        className={styles.inputElement}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {postfix}
    </div>
  );
};
