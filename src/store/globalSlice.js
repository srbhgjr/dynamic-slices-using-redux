import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    total: 2
  },
  reducers: {
    handleChangeTotal(state, action) {
      state.total = action.payload;
    }
  }
});
