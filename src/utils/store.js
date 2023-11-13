import { configureStore } from "@reduxjs/toolkit";
import appSlices from "./appSlices";
import searchSlices from "./searchSlices";
import chatSlices from "./chatSlices";
const store = configureStore({
    reducer: {
        app: appSlices,
        search: searchSlices,
        chats:chatSlices

    }
})
export default store;