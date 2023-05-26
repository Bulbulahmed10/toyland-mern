import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContextProvider = createContext(null);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const googleLoginIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photoURL) => {
    setLoading(true)
   return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unSubscribe();
    };
  });

  const authInfo = {
    user,
    setUser,
    googleLoginIn,
    registerUser,
    loginUser,
    updateUser,
    logOut,
    loading
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
