import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  msg: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupSet(state, action) {
      state.status = action.payload.status;
      state.msg = action.payload.msg;
    },
  },
});

export default popupSlice.reducer;
export const { popupSet } = popupSlice.actions;
