export const getFilteredItems = (
  pcTypeFilter: string,
  nameFilter: string,
  itemsList: any[]
) => {
  const isPcTypeFilterActive = !!pcTypeFilter;
  const isNameFilterActive = !!nameFilter;

  if (!isPcTypeFilterActive && !isNameFilterActive) {
    return itemsList;
  }

  const result = [];

  for (let i = 0; i < itemsList.length; i++) {
    if (isPcTypeFilterActive && itemsList[i].type !== pcTypeFilter) {
      continue;
    }
    if (isNameFilterActive && itemsList[i].name !== nameFilter) {
      continue;
    }
    result.push(itemsList[i]);
  }

  return result;
};
