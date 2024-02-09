import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStaus",

  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },

  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinsished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;

export default fetchStatusSlice;
