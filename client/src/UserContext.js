import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [users, setUser] = useState({
    couple: false,
    guests: false,
  });
  const [userModal, setUserModal] = useState(false);

  return (
    <UserContext.Provider value={{ users, setUser, userModal, setUserModal }}>
      {children}
    </UserContext.Provider>
  );
};
