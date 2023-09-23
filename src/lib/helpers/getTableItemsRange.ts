import { IFilteres } from "../types/filteres";
import { ITableItem } from "../types/tableItem";

export const getTableItemsRange = (
  itemsList: ITableItem[],
  filteres: IFilteres
) => {
  const { page, page_size } = filteres;

  const itemsLength = itemsList.length;

  const currentPage = !!page ? +page : 1;
  const pageSize = !!page_size ? +page_size : 10;

  if (itemsLength <= pageSize) {
    return itemsList;
  }

  const startRange = (currentPage - 1) * pageSize;
  const endRange = startRange + pageSize - 1;

  return itemsList.slice(startRange, endRange + 1);
};
