import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      state.push(action.payload);
    },
    removetoCart: (state, action) => {
      return state.filter((items) => items !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
