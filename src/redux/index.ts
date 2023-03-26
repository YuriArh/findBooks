import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/booksSlice";
import oneBookReducer from "./features/oneBookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    oneBook: oneBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
