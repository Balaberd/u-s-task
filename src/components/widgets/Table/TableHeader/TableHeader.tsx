import cn from "classnames";
import { Checkbox } from "../../../shared";

import styles from "./TableHeader.module.css";
import layoutStyles from "./../TableRow/TableRowLayout.module.css";

export const TableHeader: React.FC = () => {
  return (
    <div className={cn(styles.TableHeader, layoutStyles.TableRow)}>
      <div className={styles.cell}>
        <Checkbox checked={false} onChange={() => {}} />
      </div>
      <div className={styles.cell}></div>
      <div className={styles.cell}>Название</div>
      <div className={styles.cell}>Тип</div>
      <div className={styles.cell}>Расположение</div>
      <div className={styles.cell}>Орг.еденица</div>
      <div className={styles.cell}>Инв.номер</div>
      <div className={styles.cell}>Теги</div>
      <div className={styles.cell}>Дата создания</div>
      <div className={styles.cell}>Дата обновления</div>
      <div className={styles.cell}>Дата аудита</div>
      <div className={styles.cell}>1</div>
    </div>
  );
};
