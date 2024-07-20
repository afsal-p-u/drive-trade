import { createContext, useContext, useState } from "react";

const PopupContext = createContext({});

export const PopupContextProvider = ({ children }: any) => {
  const [component, _setComponent] = useState(null);

  const setComponent = (value: any) => {
    _setComponent(value);
  };

  return (
    <PopupContext.Provider value={{ component, setComponent }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = () => useContext(PopupContext)