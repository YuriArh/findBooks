import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "AIzaSyAuS-Rf8KiiAAUVGqaEzTq-CaBVq7rZTVc";

export const getOneBook = createAsyncThunk(
  "books/getOneBook",
  async (options?: string) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${options}?projection=full&key=${apiKey}`
      );
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
);
