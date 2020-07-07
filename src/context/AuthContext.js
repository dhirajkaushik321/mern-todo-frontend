import React,{useState,createContext} from 'react'
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [loggedInUser,setLoggedInUser]=useState({})
    const login=()=>setIsLoggedIn(true)
    const logout=()=>setIsLoggedIn(false)
    return (
       <AuthContext.Provider value={{isLoggedIn,loggedInUser,setLoggedInUser,login,logout}}>
            {children}
       </AuthContext.Provider>
    )
}

export default AuthContextProvider
