import { createSlice } from "@reduxjs/toolkit";

export const defaultChangeState = {
  change: 0
};

export const changeSlice = createSlice({
  name: "change",
  initialState: {
    removed_items: []
  },
  reducers: {
    handleChange(state, action) {
      const { id, value } = action.payload;
      state[id] = {
        change: value
      };
    },
    handleAdd(state, action) {
      const { id } = action.payload;
      console.log("added new item", id);
      state[id] = {
        change: 0
      };
    },
    handleDelete(state, action) {
      const { id } = action.payload;
      delete state[id];
      state.removed_items = [...state.removed_items, id];
    }
  }
});
