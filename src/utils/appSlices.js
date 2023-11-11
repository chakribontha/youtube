import { createSlice } from "@reduxjs/toolkit";
const appSlices = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toogleMenu:(state)=> {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
           state.isMenuOpen = false;
        }
    },
})
export const { toogleMenu,closeMenu } = appSlices.actions;
export default appSlices.reducer;