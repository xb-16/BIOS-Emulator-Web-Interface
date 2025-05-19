import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: 1,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    next: (state) => {
      state.tab++;
      if (state.tab == 6) {
        state.tab = 1;
      }
    },
    prev: (state) => {
      state.tab--;
      if (state.tab == 0) {
        state.tab = 5;
      }
    },
  },
});
export const { next, prev } = tabSlice.actions;
export default tabSlice.reducer;
