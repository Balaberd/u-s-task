import React, { useState } from "react";
import { Breadсrumbs, Icon } from "../../shared";
import { TableHeader } from "./TableHeader/TableHeader";
import styles from "./Table.module.css";
import { TableRow } from "./TableRow/TableRow";
import { Input } from "../../shared/Input/Input";
import { useSearchParams } from "react-router-dom";
import { Dropdown } from "../../shared/Dropdown/Dropdown";
import { FilterDropdown } from "../../blocks/FilterDropdown/FilterDropdown";
import cn from "classnames";
import { getFilteredItems } from "../../../lib/helpers/getFilteredItems";
import { TABLE_ITEMS_MOCK } from "../../../lib/TABLE_ITEMS_MOCK";

interface Props {
  title: string;
}

export const Table: React.FC<Props> = ({ title }) => {
  const [inputValue, setInputValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilterQuery: string = searchParams.get("name") || "";
  const pcTypeFilterQuery: string = searchParams.get("pc_type") || "";

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSetQuery = (newValue?: string) => {
    setSearchParams({ name: inputValue, pc_type: newValue ?? "" });
  };

  const filteredItems = getFilteredItems(
    pcTypeFilterQuery,
    nameFilterQuery,
    TABLE_ITEMS_MOCK
  );

  return (
    <div className={styles.Table}>
      <Breadсrumbs />
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.filterBlock}>
        <div>{filteredItems.length} записи</div>
        <Input
          classNames={styles.input}
          prefix={
            <button
              className={styles.searchButton}
              onClick={() => handleSetQuery(pcTypeFilterQuery)}
            >
              <Icon iconName="search" />
            </button>
          }
          postfix={
            <Dropdown
              trigger={
                <button className={cn(styles.filterButton, styles.dropdown)}>
                  <Icon iconName="filter" />
                </button>
              }
            >
              <FilterDropdown onChange={handleSetQuery} />
            </Dropdown>
          }
          placeholder="Поиск"
          value={inputValue}
          onChange={handleChangeInputValue}
        />
      </div>

      <div className={styles.tableWrapper}>
        <TableHeader />
        <div className={styles.tableBody}>
          {filteredItems.map((mock) => (
            <TableRow checked={false} {...mock} />
          ))}
        </div>
      </div>

      <div className={styles.paginationBlock}>pagination block</div>
    </div>
  );
};
