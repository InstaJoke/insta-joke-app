/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const UserContext = createContext()

export default UserContext



export function UserContextProvider({children}){

    const [user, setUser] = useState({});

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}