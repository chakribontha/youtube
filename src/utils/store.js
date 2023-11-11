import { configureStore } from "@reduxjs/toolkit";
import appSlices from "./appSlices";
const store = configureStore({
    reducer: {
       app:appSlices,
    }
})
export default store;