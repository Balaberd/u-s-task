import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Breadсrumbs.module.css";

const PATH_TRANSLATE_MAP: { [key: string]: string } = {
  cmdb: "CMDB",
  servers_and_pc: "Серверы и ПК",
};

interface Props {
  classNames?: string;
}

export const Breadсrumbs: React.FC<Props> = ({ classNames }) => {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => !!crumb);
  const crumbsPaths = crumbs.map(
    (crumb, ind) => (crumbs[ind - 1] ? `/${crumbs[ind - 1]}` : "") + `/${crumb}`
  );

  return (
    <div className={cn(styles.Breadсrumbs, classNames)}>
      {crumbs.map((crumb, ind) => (
        <React.Fragment key={crumbsPaths[ind]}>
          <span>/</span>
          <NavLink
            className={cn(styles.crumb, {
              [styles.crumb_active]: ind === crumbs.length - 1,
            })}
            to={crumbsPaths[ind]}
          >
            {PATH_TRANSLATE_MAP[crumb]}
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  );
};
