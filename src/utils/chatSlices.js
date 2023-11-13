import { createSlice } from "@reduxjs/toolkit";

const chatslice = createSlice({
    name: "chats",
    initialState: 
        {
          message:[]
        }
    ,
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(15, 1);
            state.message.unshift(action.payload);
        }
    }
})
export const  {addMessage}=chatslice.actions;
export default chatslice.reducer;
