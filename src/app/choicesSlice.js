import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
};

const choicesSlice = createSlice({
    name : "choices",
    initialState,
    reducers : {
        choicesSet : (state, action) => {
            state.status = action.payload.status;
        }
    }
});

export default choicesSlice.reducer;
export const { choicesSet } = choicesSlice.actions;