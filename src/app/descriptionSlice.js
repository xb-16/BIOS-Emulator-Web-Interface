import { createSlice } from "@reduxjs/toolkit";
import { navigationUpdate } from "./navigationActions";

const initialState = {
  description: "",
};

const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(navigationUpdate, (state, action) => {
      state.description = action.payload.description;
    });
  },
});

export default descriptionSlice.reducer;
export const { setDescription } = descriptionSlice.actions;
