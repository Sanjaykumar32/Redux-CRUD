import { createSlice } from "@reduxjs/toolkit";
import { apidata } from "../../Apidata/Api";

const initialState = {
  value: apidata,
};

export const counterSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.value.push(action.payload);
    },
    deleteName: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.value.map((el) => {
        if (el.id === action.payload.id) {
          el.name = action.payload.name;
        }
      });
    },
  },
});

export const { addData, deleteName, updateUser } = counterSlice.actions;

export default counterSlice.reducer;
