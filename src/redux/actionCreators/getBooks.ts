import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "AIzaSyAuS-Rf8KiiAAUVGqaEzTq-CaBVq7rZTVc";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (options?: { string: string; isNewState: boolean }) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${options?.string}&maxResults=30&key=${apiKey}`
      );
      return { data: response.data, isNewState: options?.isNewState };
    } catch (error: any) {
      return error.message;
    }
  }
);
