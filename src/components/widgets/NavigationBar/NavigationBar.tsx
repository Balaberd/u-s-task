import styles from "./NavigationBar.module.scss";
import { LogoBlock } from "../../shared";
import { NavigationBlock } from "../../blocks";
import { navigationMenu } from "./navigationMenu";

export const NavigationBar: React.FC = () => {
  return (
    <div className={styles.NavigationBar}>
      <LogoBlock />
      <div className={styles.navigationBlocks}>
        {navigationMenu.map((menu) => (
          <NavigationBlock navigationMenuBlock={menu} />
        ))}
      </div>
    </div>
  );
};
