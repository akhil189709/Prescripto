import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "₹";

  return (
    <AppContext.Provider
      value={{
        doctors: doctors,
        currencySymbol: currencySymbol,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
