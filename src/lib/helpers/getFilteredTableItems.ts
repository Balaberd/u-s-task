import { IFilteres } from "../types/filteres";
import { ITableItem } from "../types/tableItem";

export const getFilteredTableItems = (
  itemsList: ITableItem[],
  filteres: IFilteres
) => {
  const { nameFilter, pcType } = filteres;

  const result = [];

  for (let i = 0; i < itemsList.length; i++) {
    
    if (nameFilter && itemsList[i].name !== nameFilter) {
      continue;
    }

    result.push(itemsList[i]);
  }

  return result;
};
