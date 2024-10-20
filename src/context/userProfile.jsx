import { createContext, useState, useEffect } from "react";

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    userImageUrl: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileContext;
