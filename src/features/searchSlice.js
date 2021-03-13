import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: false,
    param: null,
    goBack: false,
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    changeParam: (state, action) => {
      state.param = action.payload;
    },
    setGoBack: (state, action) => {
      state.goBack = action.payload;
    },
  },
});

export const { changeValue, changeParam, setGoBack } = searchSlice.actions;

export const selectSearch = (state) => state.search.value;
export const selectParam = (state) => state.search.param;
export const selectGoBack = (state) => state.search.goBack;

export default searchSlice.reducer;
