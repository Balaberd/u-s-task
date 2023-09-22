import React, { useEffect } from "react";
import { Breadсrumbs } from "../../shared";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableRow } from "./TableRow/TableRow";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import { getMocks } from "../../../store/slices/tableItemsSlice";
import { TableFilterBlock } from "./TableFilterBlock/TableFilterBlock";
import { useSearchParams } from "react-router-dom";
import { IFilteres } from "../../../lib/types/filteres";
import { getFilteredTableItems } from "../../../lib/helpers/getFilteredTableItems";
import styles from "./Table.module.css";
import { debounce } from "../../../lib/helpers/debounce";

interface Props {
  title: string;
}

export const Table: React.FC<Props> = ({ title }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMocks());
  }, []);

  const filteres: IFilteres = {
    name: searchParams.get("name") || "",
    pc_type: searchParams.get("pc_type") || "",
    tags: searchParams.get("tags") || "",
    page_size: searchParams.get("page_size") || "",
    page: searchParams.get("page") || "",
  };

  const handleSetNameSearchParam = debounce(
    (newValue) => setSearchParams({ ...filteres, name: newValue }),
    700
  );

  const itemsList = useAppSelector((state) => state.tableItems);
  const filteredItems = getFilteredTableItems(itemsList, filteres);

  return (
    <div className={styles.Table}>
      <Breadсrumbs />
      <h2 className={styles.title}>{title}</h2>
      <TableFilterBlock
        filteres={filteres}
        totalCount={filteredItems.length}
        value={filteres.name ?? ""}
        setSearchNameParam={handleSetNameSearchParam}
      />
      <div className={styles.tableWrapper}>
        <TableHeader />
        <div className={styles.tableBody}>
          {filteredItems.map((mock) => (
            <TableRow key={mock.id} checked={false} item={mock} />
          ))}
        </div>
      </div>
      <div className={styles.paginationBlock}>pagination block</div>
    </div>
  );
};
