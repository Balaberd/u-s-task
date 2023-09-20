import React from "react";
import styles from "./Icon.module.css";
import cn from "classnames";

import { ICON_MAP } from "./iconMap";

interface Props {
  iconName: string;
  classNames?: string;
}

export const Icon: React.FC<Props> = ({ iconName, classNames }) => {
  const Component = ICON_MAP[iconName];
  return Component ? (
    <Component className={cn(styles.Icon, classNames)} />
  ) : null;
};
