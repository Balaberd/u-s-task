import cn from "classnames";

import styles from "./TableRow.module.css";
import layoutStyles from "./TableRowLayout.module.css";
import { Checkbox, Icon } from "../../../shared";

interface Props {
  classNames?: string;
  checked: boolean;
  status: string;
  name: string;
  type: string;
  location: string;
  unitId: string;
  InvNumber: string;
  tags: string;
  createDate: string;
  refreshDate: string;
  auditDate: string;
}

export const TableRow: React.FC<Props> = ({
  classNames,
  checked,
  status,
  name,
  type,
  location,
  unitId,
  InvNumber,
  tags,
  createDate,
  refreshDate,
  auditDate,
}) => {
  return (
    <div className={cn(layoutStyles.TableRow, styles.TableRow, classNames)}>
      <div className={styles.cell}>
        <Checkbox checked={checked} onChange={() => {}} />
      </div>
      <div className={styles.cell}>{status}</div>
      <div className={styles.cell}>{name}</div>
      <div className={styles.cell}>{type}</div>
      <div className={styles.cell}>{location}</div>
      <div className={styles.cell}>{unitId}</div>
      <div className={styles.cell}>{InvNumber}</div>
      <div className={styles.cell}>{tags}</div>
      <div className={styles.cell}>{createDate}</div>
      <div className={styles.cell}>{refreshDate}</div>
      <div className={styles.cell}>{auditDate}</div>
      <button className={styles.actionButton}>
        <Icon iconName="dots" classNames={styles.icon} />
      </button>
    </div>
  );
};
