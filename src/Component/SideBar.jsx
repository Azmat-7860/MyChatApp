import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import ChatItem from "./ChatItem";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { AuthContext } from "../Context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import UserSuggest from "./UserSuggest";

const SideBar = () => {
  const { signInUser, model } = useContext(AuthContext);
  const [chats, setChats] = useState([]);
  // console.log(chats);
  // console.log(signInUser);
  
  
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", signInUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    signInUser.uid && getChats();
  }, [signInUser.uid]);

  return (
    <div
      className={`chat-list-container ${
        model ? "position-absolute z-3 d-block w-75 " : ""
      }`}
    >
      <Navbar />
      <SearchBar />
      <div
        className="chat-list overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-100">
          {Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat, index) => (
              <ChatItem key={index} {...chat} />
            ))}
        </div>
      </div>
        <p style={{fontSize: "14px"}} className="mb-0 fw-bold">Add New Freinds</p>
        <div className="chat-suggest overflow-auto " style={{ scrollbarWidth: "none" }}>

        <UserSuggest />
        </div>
      
    </div>
  );
};

export default SideBar;
