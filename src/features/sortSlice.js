import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: {
    value: "relevancy",
  },
  reducers: {
    changeSort: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSort } = sortSlice.actions;

export const selectSort = (state) => state.sort.value;

export default sortSlice.reducer;
