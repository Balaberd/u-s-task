import React, { useEffect } from "react";
import { Pagination } from "../../shared";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableRow } from "./TableRow/TableRow";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import { getMocks } from "../../../store/slices/tableItemsSlice";
import { TableFilterBlock } from "./TableFilterBlock/TableFilterBlock";
import { useSearchParams } from "react-router-dom";
import { IFilteres } from "../../../lib/types/filteres";
import { getFilteredTableItems } from "../../../lib/helpers/getFilteredTableItems";
import { debounce } from "../../../lib/helpers/debounce";
import { getTableItemsRange } from "../../../lib/helpers/getTableItemsRange";
import { Breadсrumbs, PageSizeControl } from "../../blocks";
import styles from "./Table.module.css";

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
    page_size: searchParams.get("page_size") || "10",
    page: searchParams.get("page") || "1",
  };

  const handleSetNameSearchParam = debounce(
    (newValue) => setSearchParams({ ...filteres, name: newValue, page: "1" }),
    700
  );

  const handleSetCurrentPage = (newPage: number) => {
    setSearchParams({ ...filteres, page: `${newPage}` });
  };

  const handleSetPageSize = (newSize: number) => {
    setSearchParams({ ...filteres, page: "1", page_size: `${newSize}` });
  };

  const itemsList = useAppSelector((state) => state.tableItems);
  const filteredItems = getFilteredTableItems(itemsList, filteres);
  const itemsRange = getTableItemsRange(filteredItems, filteres);

  const pagesLength = Math.ceil(filteredItems.length / +filteres.page_size);

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
          {itemsRange.map((mock) => (
            <TableRow key={mock.id} checked={false} item={mock} />
          ))}
        </div>
      </div>
      <div className={styles.paginationBlock}>
        <Pagination
          changePage={handleSetCurrentPage}
          currentPage={+filteres.page}
          pagesLength={pagesLength}
        />
        <PageSizeControl
          pageSize={+filteres.page_size}
          setPageSize={handleSetPageSize}
        />
      </div>
    </div>
  );
};
