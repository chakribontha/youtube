import { configureStore } from "@reduxjs/toolkit";
import appSlices from "./appSlices";
import searchSlices from "./searchSlices";
const store = configureStore({
    reducer: {
        app: appSlices,
        search: searchSlices,

    }
})
export default store;