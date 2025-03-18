import { createContext, useReducer, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { signInUser } = useContext(AuthContext);
  

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const ChatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            signInUser.uid > action.payload.uid
              ? signInUser.uid + action.payload.uid
              : action.payload.uid + signInUser.uid,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(ChatReducer, INITIAL_STATE);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom Hook to use ChatContext
export const useChat = () => {
  return useContext(ChatContext);
};
