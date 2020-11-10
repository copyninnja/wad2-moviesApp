import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext(null);
const AuthContextProvider = (props) =>{

const [isAuthenticated,setIsAuthenticated] = useState(false) ;

const authenticate = (username,password) =>{//TODO
};
const signout =()=> { //TODO
}
return (
<AuthContext.Provider
value={{
isAuthenticated,
authenticate,
signout,
}}
>
{props.children}
</AuthContext.Provider>
);
};
