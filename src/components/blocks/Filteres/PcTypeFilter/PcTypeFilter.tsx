import styles from "./PcTypeFilter.module.css";
import cn from "classnames";

interface Props {
  classNames?: string;
  currentType: string;
  changeType: (newType: string) => void;
}

export const PcTypeFilter: React.FC<Props> = ({
  classNames,
  currentType,
  changeType,
}) => {
  return (
    <div className={cn(styles.PcTypeFilteres, classNames)}>
      <label className={styles.label}>
        <input
          checked={currentType === ""}
          onChange={(e) => changeType("")}
          className={styles.input}
          type="radio"
          name="type"
          id="default"
        />
        <span>default</span>
      </label>
      <label className={styles.label}>
        <input
          checked={currentType === "vm_host"}
          onChange={(e) => changeType(e.currentTarget.id)}
          className={styles.input}
          type="radio"
          name="type"
          id="vm_host"
        />
        <span>vm_host</span>
      </label>
      <label className={styles.label}>
        <input
          checked={currentType === "vm_guest"}
          onChange={(e) => changeType(e.currentTarget.id)}
          className={styles.input}
          type="radio"
          name="type"
          id="vm_guest"
        />
        <span>vm_guest</span>
      </label>
    </div>
  );
};
