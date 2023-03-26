import { createSlice } from "@reduxjs/toolkit";
import { getOneBook } from "../actionCreators/getOneBook";
import { OneBookState } from "../../types";

const initialState: OneBookState = {
  loading: false,
  error: false,
  data: {},
};

const oneBookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneBook.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOneBook.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getOneBook.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export default oneBookSlice.reducer;
