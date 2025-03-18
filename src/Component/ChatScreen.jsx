import React, { useContext, useEffect, useRef, useState } from "react";
import InputBar from "./InputBar";
import TopBar from "./TopBar";
import Sender from "./Sender";
import Reciver from "./Reciver";
import { useChat } from "../Context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";

const ChatScreen = () => {
  const {signInUser} = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const { state } = useChat();

  
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", state.chatId), (doc) => {
      setMessages(doc.data()?.message || []);
     
    });

    return () => {
      unsub();
    };
  }, [state.chatId]);


  return (
    <div className="chat-container ">
      <TopBar userData={state} />
      <div 
        className="chat-box mb-4 d-flex flex-column  w-100 overflow-auto "
        style={{ scrollbarWidth: "none" }}
      >
      {messages.map((msg, index) => (
        
        // console.log(msg?.senderId=== signInUser.uid)
         msg?.senderId === signInUser?.uid ? 
          <Reciver key={index} msg={msg} /> :   // ✅ Pass `msg` as a prop
          <Sender key={index} msg={msg} />      // ✅ Pass `msg` as a prop 
      
        
      ))}
       
      </div>
      <InputBar />
    </div>
  );
};

export default ChatScreen;
