import React, { useContext, useState } from "react";
import { useChat } from "../Context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";
import { v4 as uuid } from "uuid";
import { toast, ToastContainer } from "react-toastify";

const InputBar = () => {
  const { state } = useChat();
  // console.log(state);
  const { signInUser } = useContext(AuthContext);
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (state.chatId === "null") {
      toast.error("Select the User first.");
      setText("");
      return; // Stop function execution
    }

    if (text.trim() === "") {
      // Check for empty or whitespace messages
      toast.error("Message cannot be empty!");
      return;
    }
    await updateDoc(doc(db, "chats", state.chatId), {
      //message is going to save
      message: arrayUnion({
        text,
        senderId: signInUser.uid,
        id: uuid(),
        date: Timestamp.now(),
      }),
    });

    //save last message to both the user ----->
    await updateDoc(doc(db, "userChats", signInUser.uid), {
      [state.chatId + ".lastMessage"]: {
        text,
      },
      [state.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", state.user.uid), {
      [state.chatId + ".lastMessage"]: {
        text,
      },
      [state.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
  };

  return (
    <div className="input-container ">
      <ToastContainer />
      <span className="emoji-icon">😊</span>

      <input
        type="text"
        value={text}
        
        placeholder="Message"
        className="message-input w-75"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit} className="send-button">
        ➤
      </button>
    </div>
  );
};

export default InputBar;
