import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    value: null,
  },
  reducers: {
    changeArticle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeArticle } = articleSlice.actions;

export const selectArticle = (state) => state.article.value;

export default articleSlice.reducer;
