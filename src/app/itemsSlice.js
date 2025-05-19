import { createSlice } from "@reduxjs/toolkit";
import { navigationUpdate } from './navigationActions';


let initialState = {
    count : 0,
    actual : 0
}

let itemsSlice = createSlice({
    name : "items",
    initialState,
    reducers : {
        setCount : (state, action) => {
            state.count = action.payload.count;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(navigationUpdate, (state, action) => {
            if(action.payload.actual > state.count){
                state.actual = 1;
            }
            else if(action.payload.actual <= 0){
                state.actual = state.count;
            }
            else{
                state.actual = action.payload.actual;
            }
        });
      }
})

export default itemsSlice.reducer;
export const { setCount, setActual } = itemsSlice.actions;