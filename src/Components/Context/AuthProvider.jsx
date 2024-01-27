import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";


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

    // Sign user out
    const signOutFunc = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          setCurrentUser({});
          console.log(currentUser);
        })
        .catch((error) => {
          // An error happened.
          setError(error.message.slice(10));
        });
    };

  

  const authData = {
    currentUser,
    setCurrentUser,
    signUp,
    logIn,
    signOutFunc
  }
  return (
    <>
      <AuthContext.Provider
      value={authData}>{props.children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
