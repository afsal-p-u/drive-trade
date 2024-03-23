import { useContext, createContext, useState } from "react";

interface AuthContextType {
    token: string | null,
    setToken: (value: string) => void;
}


const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, _setToken] = useState(localStorage.getItem('token'));
  const setToken = (value: string) => {
    _setToken(value);
    localStorage.setItem('token', JSON.stringify(value))
  };
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuthContext = () => useContext(AuthContext)