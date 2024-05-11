import { useContext, createContext, useState } from "react";

interface AuthContextType {
    user: string | null,
    setUser: (value: string) => void;
}


const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, _setUser] = useState(localStorage.getItem('user'));

  const setUser = (value: string) => {
    _setUser(value);
    localStorage.setItem('user', JSON.stringify(value))
  };
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuthContext = () => useContext(AuthContext)