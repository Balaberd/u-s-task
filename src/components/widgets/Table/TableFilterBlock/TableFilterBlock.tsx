import React, { useState } from "react";
import { FilterDropdown } from "../../../blocks/FilterDropdown/FilterDropdown";
import { Icon } from "../../../shared";
import { Dropdown } from "../../../shared/Dropdown/Dropdown";
import { Input } from "../../../shared/Input/Input";
import cn from "classnames";
import styles from "./TableFilterBlock.module.css";

interface Props {
  value: string;
  setSearchNameParam: any;
  totalCount: number;
}

export const TableFilterBlock: React.FC<Props> = ({
  value,
  setSearchNameParam,
  totalCount,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const hanleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setSearchNameParam(newValue);
  };

  return (
    <div className={styles.TableFilterBlock}>
      <div className={styles.counter}>{totalCount} записи</div>
      <Input
        classNames={styles.input}
        prefix={
          <button className={styles.button}>
            <Icon iconName="search" />
          </button>
        }
        postfix={
          <Dropdown
            trigger={
              <button className={cn(styles.button, styles.dropdown)}>
                <Icon iconName="filter" />
              </button>
            }
          >
            <FilterDropdown onChange={() => {}} />
          </Dropdown>
        }
        placeholder="Поиск"
        value={inputValue}
        onChange={hanleChangeInputValue}
      />
    </div>
  );
};
