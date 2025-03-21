import React, { useContext, useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import ChatItem from "./ChatItem";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { AuthContext } from "../Context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import UserSuggest from "./UserSuggest";
import { ModelContext } from "../Context/ModelContext";
import Loadign from "./Loadign";

const SideBar = () => {
  const { signInUser } = useContext(AuthContext);
  const { modal } = useContext(ModelContext);

  const [chats, setChats] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", signInUser.uid), (doc) => {
        setChats(doc.data());
        setLoading(false);
      });
      return () => {
        unsub();
      };
    };
    signInUser.uid && getChats();
  }, [signInUser.uid]);

  return (
    <div
      className={`chat-list-container overflow-auto ${
        modal ? "position-absolute z-3 d-block w-75 " : ""
      }`}
    >
      <Navbar />
      <SearchBar />
      <div
        className="chat-list overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {loading ? (<div className="w-100 h-100 d-flex justify-content-center align-items-center">

          <HashLoader color="#4640a5"/>
        </div>
        ) : (
          <div className="w-100">
            {Object.entries(chats)
              ?.sort((a, b) => b[1].date - a[1].date)
              .map((chat, index) => (
                <ChatItem key={index} {...chat} />
              ))}
          </div>  
        )}
      </div>
      <p style={{ fontSize: "14px" }} className="mb-0 fw-bold">
        Add New Freinds
      </p>
      <div>
        <UserSuggest />
      </div>
    </div>
  );
};

export default SideBar;
