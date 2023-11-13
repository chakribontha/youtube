import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlices';
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
    
    const dispatch = useDispatch();

    const chatmessage = useSelector((state) => state.chats.message);
    
    useEffect(() => {
       const i= setInterval(() => {
           //API polling
           console.log("API polling");
           dispatch(addMessage({
               name: generateRandomName(),
               message: makeRandomMessage(20)+"😍"
           }))
           
        }, 2000);
   
        return () => {
            clearInterval(i);
        }
    },[])

  return (
    <div className="w-full h-[600px] ml-4 p-2 border border-black bg-slate-100 rounded-lg overflow-auto flex flex-col-reverse">
     
          {
              chatmessage.map((c,i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />
              ))
          }
    </div>
  );
}

export default LiveChat
