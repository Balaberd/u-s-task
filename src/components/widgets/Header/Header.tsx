import { Icon } from "../../shared";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <button className={styles.button}>
        <Icon iconName="settings" />
      </button>

      <div className={styles.userBlock}>
        <div className={styles.avatar}>N</div>
        <div className={styles.name}>null null</div>
        <button className={styles.button}>
          <Icon iconName="arrowM" classNames={styles.dropdownIcon} />
        </button>
      </div>
    </div>
  );
};
