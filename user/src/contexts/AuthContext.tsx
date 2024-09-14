import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: any) => {
  const [auth, _setAuth] = useState(localStorage.getItem('auth'));

  const setAuth = (value: any) => {
    localStorage.setItem('auth', JSON.stringify(value))
    _setAuth(value);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext)