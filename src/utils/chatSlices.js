import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatslice = createSlice({
    name: "chats",
    initialState: 
        {
          message:[]
        }
    ,
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(OFFSET_LIVE_CHAT, 1);
            state.message.push(action.payload);
        }
    }
})
export const  {addMessage}=chatslice.actions;
export default chatslice.reducer;
