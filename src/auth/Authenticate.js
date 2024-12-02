import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();


export function AuthProvider({ children }){

    const [user , setUser] = useState(null);
    const navigate = useNavigate();

    const login = (user)=>{
        setUser(user)
    }

    const logout = () =>{
        setUser(null);
        navigate('/login')
    }

    return (
      <AuthContext.Provider value={{user , login , logout}}>
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
