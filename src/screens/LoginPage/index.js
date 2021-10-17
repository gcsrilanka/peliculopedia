import React from "react";
import "./index.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <button onClick={signInWithGoogle}>Google</button>
    </div>
  );
};

export default LoginPage;
