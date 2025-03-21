import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { db } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";

const UserSuggest = () => {
  const [user, setUsers] = useState([]);
  const { signInUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "peoples"));
        const userList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSelect = async (oneUser) => {
  
    const combinId =
      signInUser.uid > oneUser.uid
        ? signInUser.uid + oneUser.uid
        : oneUser.uid + signInUser.uid;
    //check before they talk ,if not crete chat collection
    const res = await getDoc(doc(db, "chats", combinId));
    if (!res.exists()) {
      setDoc(doc(db, "chats", combinId), { message: [] });
    }

    await updateDoc(doc(db, "userChats", signInUser.uid), {
      //it store in sign in user id
      [combinId + ".userInfo"]: {
        uid: oneUser.uid,
        displayName: oneUser.displayName,
      },
      [combinId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", oneUser.uid), {
      // it srore in another person id
      [combinId + ".userInfo"]: {
        uid: signInUser.uid,
        displayName: signInUser.displayName,
      },
      [combinId + ".date"]: serverTimestamp(),
    });
  };
  return (
    <div className="chat-suggest overflow-auto " style={{ scrollbarWidth: "none" }}>

      {user.length > 0 ? (
        user.map((ele) => (
          <div key={ele.id} className="chat-item search-list">
            <div className="chat-info">
              <div className="chat-header">
                <h4 className="text-capitalize  mt-1">{ele.displayName}</h4>
                <span
                  className="chat-time"
                  onClick={() => {
                    handleSelect(ele);
                  }}
                >
                  <MdPersonAddAlt1 size={"20px"} />
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
   
    </div>
  );
};

export default UserSuggest;
