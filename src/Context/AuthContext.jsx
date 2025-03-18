import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
const[signInUser,setSignInUser] = useState({});

useEffect(()=> {
    onAuthStateChanged(auth,(user) =>{
        setSignInUser(user);
        // console.log(user);
        
    })

},[])

return <AuthContext.Provider value={{signInUser}}>
    {children}
</AuthContext.Provider>
}