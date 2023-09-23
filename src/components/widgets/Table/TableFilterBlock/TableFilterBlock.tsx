import React, { useState } from "react";
import { Filteres } from "../../../blocks/Filteres/Filteres";
import { Icon } from "../../../shared";
import { Dropdown } from "../../../shared/Dropdown/Dropdown";
import { Input } from "../../../shared/Input/Input";
import { IFilteres } from "../../../../lib/types/filteres";

import cn from "classnames";
import styles from "./TableFilterBlock.module.css";

interface Props {
  value: string;
  setSearchNameParam: any;
  totalCount: number;
  filteres: IFilteres;
}

export const TableFilterBlock: React.FC<Props> = ({
  value,
  setSearchNameParam,
  totalCount,
  filteres,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const hanleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setSearchNameParam(newValue);
  };

  const firstItemNumber =
    +filteres.page * +filteres.page_size - +filteres.page_size + 1;
  const endIRange = firstItemNumber + +filteres.page_size - 1;
  const lastItemNumber = endIRange >= totalCount ? totalCount : endIRange;

  return (
    <div className={styles.TableFilterBlock}>
      <div
        className={styles.counter}
      >{`Записи ${firstItemNumber} - ${lastItemNumber} из ${totalCount}`}</div>
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
            droppedBlockClassNames={styles.dropdown}
          >
            <Filteres filteres={filteres} />
          </Dropdown>
        }
        placeholder="Поиск"
        value={inputValue}
        onChange={hanleChangeInputValue}
      />
    </div>
  );
};
