import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itmeSlice";
import fetchStatusSlice from "./fetchstatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    cart: bagSlice.reducer,
  },
});

export default myntraStore;
