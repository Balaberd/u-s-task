import React from "react";
import cn from "classnames";
import styles from "./LogoBlock.module.css";

interface Props {
  classNames?: string;
}

export const LogoBlock: React.FC<Props> = ({ classNames }) => {
  return (
    <div className={cn(styles.LogoBlock, classNames)}>
      <div className={styles.logo}>U - SYSTEM</div>
      <div className={styles.description}>Powered by U-System</div>
    </div>
  );
};
