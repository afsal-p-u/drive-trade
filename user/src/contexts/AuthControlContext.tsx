import { useEffect, useState, useContext, createContext } from "react";

const AuthControlContext = createContext({})

export const AuthControlContextProvider = ({ children } : any) => {
    const [authControl, _setAuthControl] = useState(null)

    const setAuthControl = (value: any) => {
        _setAuthControl(value)
    }

    return (
        <AuthControlContext.Provider
            value={{ authControl, setAuthControl }}
        >
            {children}            
        </AuthControlContext.Provider>
    )
}

export const useAuthControlContext = () => useContext(AuthControlContext)