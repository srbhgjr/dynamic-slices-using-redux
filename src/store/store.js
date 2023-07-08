import { configureStore } from "@reduxjs/toolkit";
import { changeSlice } from "./changeSlice";
import { globalSlice } from "./globalSlice";

export const store = configureStore({
  reducer: {
    changeStore: changeSlice.reducer,
    globalStore: globalSlice.reducer
  }
});

export const changeActions = changeSlice.actions;
export const globalActions = globalSlice.actions;
