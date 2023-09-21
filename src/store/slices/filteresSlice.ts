import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  pageSize: 10,
  currentPage: 1,
  pcType: null,
  tags: [],
};

const filtersSlice = createSlice({
  name: "filteres",
  initialState,
  reducers: {
    changeSortType() {},
  },
});

export const { changeSortType } = filtersSlice.actions;

export default filtersSlice.reducer;
