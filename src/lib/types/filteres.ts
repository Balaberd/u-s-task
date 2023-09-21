export type TFilterTag = "red" | "blue" | "green" | "orange";

export interface IFilteres {
  nameFilter: string | null;
  pcType: string | null;
  tags: string[];
  pageSize: string | null;
  currentPage: string | null;
}
