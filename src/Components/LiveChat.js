import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlices";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatmessage = useSelector((state) => state.chats.message);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "😍",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-4 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
        <div>
          {chatmessage.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg flex"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on submit form" + liveMessage);
          dispatch(addMessage({
            name: "chakri",
            message: liveMessage,
          }))
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 border px-2 rounded-lg border-black mb-4"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          
        />
        <button className="px-2 h-8 mx-2 bg-red-300 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
