import React from "react";
import styles from "./Checkbox.module.css";

interface Props {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={styles.Checkbox}
    />
  );
};
