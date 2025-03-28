import React, { useContext, useReducer, useState } from "react";
import {useChat } from "../Context/ChatContext";
import { ModelContext } from "../Context/ModelContext";


const ChatItem = (chats) => {
  const {dispatch} = useChat()
 const{onClose} = useContext(ModelContext);

  
  const handleClick = (user) => {
    if (window.innerWidth < 769 ) {
     onClose()
    }
    dispatch({
      type: "CHANGE_USER",
      payload: user,
    });
  };

  const firstLetter = chats[1].userInfo.displayName.charAt(0);
  return (
    <div className="chat-item" onClick={() => handleClick(chats[1].userInfo)}>
      <div className="profileName text-center">
        <p className="mb-5 text-capitalize">{firstLetter}</p>
      </div>
      <div className="chat-info">
        <div className="chat-header">
          <h4 className="text-capitalize">{chats[1].userInfo.displayName}</h4>
          <span className="chat-time">{new Date(chats[1].date?.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="chat-message">
        <p>
  {chats[1]?.lastMessage?.text.length > 20
    ? chats[1].lastMessage.text.slice(0, 20) + "..."
    : chats[1]?.lastMessage?.text}
</p>
      
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
