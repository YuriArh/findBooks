import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getBooks } from "../actionCreators/getBooks";
import { BooksState } from "../../types";
import { Book } from "../../types";

const initialState: BooksState = {
  booksKind: "",
  booksTotalItems: 0,
  booksItems: [],
  loading: false,
  error: "",
};

const makeUniq = (arr: Book[]) => {
  let result = arr.filter(
    (book, index) => index === arr.findIndex((other) => book.id === other.id)
  );
  return result;
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.loading = true;
        if (action.meta.arg?.isNewState) {
          state.booksItems = [];
        }
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.booksKind = action.payload.data.kind;
        state.booksTotalItems = action.payload.data.totalItems;
        state.loading = false;
        if (action.payload.isNewState === true) {
          state.booksItems = makeUniq(action.payload.data.items);
        } else {
          state.booksItems = makeUniq([
            ...state.booksItems,
            ...action.payload.data.items,
          ]);
        }
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.error = true;
        console.log(action.payload);
      });
  },
});

export const { addError } = booksSlice.actions;

export default booksSlice.reducer;
