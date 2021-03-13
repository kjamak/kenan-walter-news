import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/searchSlice";
import articleSlice from "../features/articleSlice";
import sortSlice from "../features/sortSlice";

export default configureStore({
  reducer: {
    search: searchSlice,
    article: articleSlice,
    sort: sortSlice,
  },
});
