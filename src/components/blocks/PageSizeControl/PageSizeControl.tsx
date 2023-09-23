import React from "react";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import cn from "classnames";
import styles from "./PageSizeControl.module.css";

interface Props {
  pageSize: number;
  setPageSize: (newSize: number) => void;
}

export const PageSizeControl: React.FC<Props> = ({ pageSize, setPageSize }) => {
  return (
    <div className={styles.PageSizeControl}>
      Количество записей:
      <Dropdown
        droppedBlockClassNames={styles.dropdown}
        trigger={<button className={styles.trigger}>{pageSize}</button>}
      >
        <ul className={styles.itemsListWrapper}>
          <li>
            <button
              className={cn(styles.itemButton, {
                [styles.itemButton_active]: pageSize === 5,
              })}
              onClick={() => setPageSize(5)}
            >
              5
            </button>
          </li>
          <li>
            <button
              className={cn(styles.itemButton, {
                [styles.itemButton_active]: pageSize === 10,
              })}
              onClick={() => setPageSize(10)}
            >
              10
            </button>
          </li>
          <li>
            <button
              className={cn(styles.itemButton, {
                [styles.itemButton_active]: pageSize === 30,
              })}
              onClick={() => setPageSize(30)}
            >
              30
            </button>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
};
