import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";


const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = (props) => {

  const [currentUser, setCurrentUser] = useState({});

  const auth = getAuth();
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword (auth, email, password);
  };

  

  const authData = {
    currentUser,
    setCurrentUser,
    signUp,
    logIn
  }
  return (
    <>
      <AuthContext.Provider
      value={authData}>{props.children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
