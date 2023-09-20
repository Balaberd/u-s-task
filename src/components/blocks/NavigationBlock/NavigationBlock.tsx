import { NavLink } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";
import { Icon } from "../../shared";
import styles from "./NavigationBlock.module.css";
import { INavigationMenu } from "../../../lib/types/navigationMenu";

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? cn(styles.link, styles.link_active) : styles.link;

interface Props {
  navigationMenuBlock: INavigationMenu;
}

export const NavigationBlock: React.FC<Props> = ({ navigationMenuBlock }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className={styles.NavigationBlock}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.title__leftBlock}>
          {navigationMenuBlock.icon}
          {navigationMenuBlock.title}
        </div>
        <Icon
          iconName="arrowM"
          classNames={cn(styles.arrowIcon, {
            [styles.arrowIcon_close]: !isOpen,
          })}
        />
      </div>

      {isOpen && (
        <ul className={styles.subtitleList}>
          {navigationMenuBlock.subtitleList.map((sub) => (
            <li key={sub.path}>
              <NavLink to={sub.path} className={setActive}>
                {sub.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
