import React, { useContext } from "react";
import ChatScreen from "../Component/ChatScreen";
import SideBar from "../Component/SideBar";
import { AuthContext } from "../Context/AuthContext";

const ChatPage = () => {
  const {model} = useContext(AuthContext)

  
  return (
    <div className="ChatContainer d-flex gap-3 m-auto">

      <SideBar />
      <ChatScreen />
    </div>
  );
};

export default ChatPage;
