import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
    name: "search",
    initialState: {
        
    },
    reducers: {
        cacheResult: (state,action) => {
            state=Object.assign(state,action.payload)
        }
    }
})
export const { cacheResult } = searchSlices.actions;
export default searchSlices.reducer;