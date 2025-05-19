import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    keys : [],
    values : [],
    descriptions : [],
    heading : ""
};

const subMenuSlice = createSlice({
    name : "subMenu",
    initialState,
    reducers : {
        subMenuSet : (state, action) => {
            state.status = action.payload.status;
            state.keys = action.payload.keys;
            state.values = action.payload.values;
            state.descriptions = action.payload.descriptions;
            state.heading = action.payload.heading;
        }
    }
});

export const { subMenuSet } = subMenuSlice.actions;
export default subMenuSlice.reducer;