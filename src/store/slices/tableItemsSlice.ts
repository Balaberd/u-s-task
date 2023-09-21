import { createSlice } from "@reduxjs/toolkit";
import { ITableItem } from "../../lib/types/tableItem";

const initialState: ITableItem[] = [];

const tableItemsSlice = createSlice({
  name: "filteres",
  initialState,
  reducers: {
    getMocks() {
      return TABLE_ITEMS_MOCK;
    },
  },
});

export const { getMocks } = tableItemsSlice.actions;
export default tableItemsSlice.reducer;

const TABLE_ITEMS_MOCK = [
  {
    id: "1",
    marker: "",
    name: "MB123",
    type: "",
    location: "location",
    unitId: "unitId",
    InvNumber: "InvNumber",
    tags: [],
    createDate: "2023-06-30 14:03:35",
    refreshDate: "2023-09-14 15:15:43",
    auditDate: "2023-09-14 15:48:45",
  },
  {
    id: "2",
    marker: "",
    name: "SBKAJDAJE",
    type: "",
    location: "location",
    unitId: "unitId",
    InvNumber: "InvNumber",
    tags: [],
    createDate: "2023-06-30 14:03:35",
    refreshDate: "2023-09-14 15:15:43",
    auditDate: "2023-09-14 15:48:45",
  },
  {
    id: "3",
    marker: "",
    name: "HELLO",
    type: "",
    location: "location",
    unitId: "unitId",
    InvNumber: "InvNumber",
    tags: [],
    createDate: "2023-06-30 14:03:35",
    refreshDate: "2023-09-14 15:15:43",
    auditDate: "2023-09-14 15:48:45",
  },
  {
    id: "4",
    marker: "",
    name: "test",
    type: "",
    location: "location",
    unitId: "unitId",
    InvNumber: "InvNumber",
    tags: [],
    createDate: "2023-06-30 14:03:35",
    refreshDate: "2023-09-14 15:15:43",
    auditDate: "2023-09-14 15:48:45",
  },
  {
    id: "5",
    marker: "",
    name: "123",
    type: "",
    location: "location",
    unitId: "unitId",
    InvNumber: "InvNumber",
    tags: [],
    createDate: "2023-06-30 14:03:35",
    refreshDate: "2023-09-14 15:15:43",
    auditDate: "2023-09-14 15:48:45",
  },
];