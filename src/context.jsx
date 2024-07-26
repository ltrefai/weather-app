import React from "react";
// import axios from "axios";

const AppContext = React.createContext();

function AppProvider({ children }) {

  return (
    <AppContext.Provider
      value={{
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to pass values
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider };