import { Dropdown } from "../../shared/Dropdown/Dropdown";
import styles from "./FilterDropdown.module.css";

interface Props {
  onChange: (newType: string) => void;
}

export const FilterDropdown: React.FC<Props> = ({ onChange }) => {
  return (
    <div className={styles.FilterDropdown}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Фильтры</div>

        <div className={styles.filter}>
          <Dropdown
            trigger={<button>cloc</button>}
          >
            <div>content</div>
          </Dropdown>

          {/* <label>Тип ПК</label>
          <select name="pc" onChange={(e) => onChange(e.target.value)}>
            <option value="">default</option>
            <option value="vm_host">vm_host</option>
            <option value="vm_guest">vm_guest</option>
          </select> */}
        </div>

        <div className={styles.buttonsBlock}>
          <button>Применить</button>
          <button>Сбросить</button>
        </div>
      </div>
    </div>
  );
};
