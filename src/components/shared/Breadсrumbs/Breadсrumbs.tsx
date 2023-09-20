import React from "react";
import styles from "./Breadсrumbs.module.css";
import cn from "classnames";

interface Props {
  classNames?: string;
}

export const Breadсrumbs: React.FC<Props> = ({ classNames }) => {
  return (
    <div className={cn(styles.Breadсrumbs, classNames)}>
      Breadсrumbs / Breadсrumbs / Breadсrumbs
    </div>
  );
};
