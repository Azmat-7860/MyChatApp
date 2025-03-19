import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
const[signInUser,setSignInUser] = useState({});
const[model,setModel] = useState(false);

useEffect(()=> {
    onAuthStateChanged(auth,(user) =>{
        setSignInUser(user);
    })

},[])

return <AuthContext.Provider value={{signInUser,model,setModel}}>
    {children}
</AuthContext.Provider>
}