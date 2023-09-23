import { IFilteres } from "../types/filteres";
import { ITableItem } from "../types/tableItem";
import { hasSameElements } from "./hasSameElement";

export const getFilteredTableItems = (
  itemsList: ITableItem[],
  filteres: IFilteres
) => {
  const { name, pc_type, tags } = filteres;

  const result = [];

  for (let i = 0; i < itemsList.length; i++) {

    const itemName = itemsList[i].name.toLowerCase();
    if (name && !itemName.includes(name.toLocaleLowerCase())) {
      continue;
    }

    if (pc_type && itemsList[i].type !== pc_type) {
      continue;
    }

    const filterTags = tags.split(" ");
    if (tags && !hasSameElements(filterTags, itemsList[i].tags)) {
      continue;
    }

    result.push(itemsList[i]);
  }

  return result;
};
