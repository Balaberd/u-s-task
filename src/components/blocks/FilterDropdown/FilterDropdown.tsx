import styles from "./FilterDropdown.module.css";

interface Props {
  onChange: (newType: string) => void;
}

export const FilterDropdown: React.FC<Props> = ({ onChange }) => {
  return (
    <div className={styles.FilterDropdown}>
      <div className={styles.wrapper}>
        Фильтры
        <label>Тип ПК</label>
        <select name="pc" onChange={(e) => onChange(e.target.value)}>
          <option value="">default</option>
          <option value="vm_host">vm_host</option>
          <option value="vm_guest">vm_guest</option>
        </select>
      </div>
    </div>
  );
};
