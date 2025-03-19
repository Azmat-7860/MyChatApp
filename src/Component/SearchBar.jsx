import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import {
  collection,
  doc,
  getDoc,
  query,
  getDocs,
  setDoc,
  where,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../Firebase";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const SearchBar = () => {
  const [searchName, setSearchName] = useState("");
  const [user, setUser] = useState("");
  const { signInUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);


  const handleSearch = async () => {
    const qri = query(
      collection(db, "peoples"),
      where("displayName", "==", searchName.toLowerCase())
    );

    try {
      const querySnapshot = await getDocs(qri);
      if (querySnapshot.empty) {
        toast.error("User Not Found ❌");
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      }
    } catch (error) {
      toast.error(error.code);
    }
  };

  const combinId =
    signInUser.uid > user.uid
      ? signInUser.uid + user.uid
      : user.uid + signInUser.uid;

  // console.log(combinId);

  const handleSelect = async () => {
    //check before they talk ,if not crete chat collection
    const res = await getDoc(doc(db, "chats", combinId));
    if (!res.exists()) {
      setDoc(doc(db, "chats", combinId), { message: [] });
    }

    await updateDoc(doc(db, "userChats", signInUser.uid), {
      //it store in sign in user id
      [combinId + ".userInfo"]: {
        uid: user.uid,
        displayName: user.displayName,
      },
      [combinId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", user.uid), {
      // it srore in another person id
      [combinId + ".userInfo"]: {
        uid: signInUser.uid,
        displayName: signInUser.displayName,
      },
      [combinId + ".date"]: serverTimestamp(),
    });
    // setUser(null);
    setOpen(true);
    setSearchName("");
  };
  return (
    <div className="chat-list-header">
      <ToastContainer />
      <div className="search-bar">
        <input
          type="text"
          value={searchName}
          placeholder="Search"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <FaSearch className="search-icon" onClick={handleSearch} />
      </div>
      {user && (
        <div
          className="chat-item search-list "
          style={{ display: open ? "none" : "block" }}>
          <div className="chat-info">
            <div className="chat-header">
              <h4 className="text-capitalize fs-5 mt-1">{user.displayName}</h4>
              <span   onClick={handleSelect} className="chat-time"><MdPersonAddAlt1 size={"30px"}/></span>
            </div>
            {/* <div className="chat-message">
              <p>ggh</p>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
