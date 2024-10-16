import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthWrapper = ({ children }) => {
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authInitialized) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return children;
};

export default AuthWrapper;
