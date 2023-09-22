import cn from "classnames";

import styles from "./TableRow.module.css";
import layoutStyles from "./TableRowLayout.module.css";
import { Checkbox, Icon, Tag } from "../../../shared";
import { ITableItem } from "../../../../lib/types/tableItem";

interface Props {
  classNames?: string;
  checked: boolean;
  item: ITableItem;
}

export const TableRow: React.FC<Props> = ({ classNames, checked, item }) => {
  const {
    marker,
    name,
    type,
    location,
    unitId,
    InvNumber,
    tags,
    createDate,
    refreshDate,
    auditDate,
  } = item;

  const firstTag = tags[0];
  const tagsLength = tags.length;

  return (
    <div className={cn(layoutStyles.TableRow, styles.TableRow, classNames)}>
      <div className={styles.cell}>
        <Checkbox checked={checked} onChange={() => {}} />
      </div>
      <div className={styles.cell}>{marker}</div>
      <div className={styles.cell}>{name}</div>
      <div className={styles.cell}>{type}</div>
      <div className={styles.cell}>{location}</div>
      <div className={styles.cell}>{unitId}</div>
      <div className={styles.cell}>{InvNumber}</div>
      <div className={styles.cell}>
        <Tag tag={firstTag} />
        {tagsLength > 1 ? <span className={styles.tagCount}>{`+ ${tagsLength - 1}`} </span> : null}
      </div>
      <div className={styles.cell}>{createDate}</div>
      <div className={styles.cell}>{refreshDate}</div>
      <div className={styles.cell}>{auditDate}</div>
      <button className={styles.actionButton}>
        <Icon iconName="dots" classNames={styles.icon} />
      </button>
    </div>
  );
};
