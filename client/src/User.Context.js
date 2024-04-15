import React, { createContext, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const user_id = localStorage.getItem("userId");

  return (
    <UserContext.Provider value={user_id}>{children}</UserContext.Provider>
  );
};

export const useUserId = () => {
  return useContext(UserContext);
};
