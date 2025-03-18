import React from "react";
import ChatScreen from "../Component/ChatScreen";
import SideBar from "../Component/SideBar";

const ChatPage = () => {
  return (
    <div className="ChatContainer d-flex gap-3  w-75 m-auto">
      <SideBar />
      <ChatScreen />
    </div>
  );
};

export default ChatPage;
