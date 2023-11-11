import { createSlice } from "@reduxjs/toolkit";
const appSlices = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toogleMenu:(state)=> {
            state.isMenuOpen = !state.isMenuOpen;
        }
    },
})
export const { toogleMenu } = appSlices.actions;
export default appSlices.reducer;