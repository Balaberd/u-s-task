import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tableItems from "./slices/tableItemsSlice";

const rootReducer = combineReducers({
  tableItems,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
