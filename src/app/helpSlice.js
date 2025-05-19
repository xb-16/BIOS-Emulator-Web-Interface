import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
};

const helpSlice = createSlice({
    name : "help",
    initialState,
    reducers : {
        helpSet : (state, action) => {
            state.status = action.payload.status;
        }
    }
})

export default helpSlice.reducer;
export const { helpSet } = helpSlice.actions