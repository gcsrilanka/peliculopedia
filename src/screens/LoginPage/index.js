import React from "react";
import "./index.css";
import LoginImg from "../../Images/LoginImg.svg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from 'react-google-button';

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
    <div className="login has-text-centered">
      <h2 className="header mb-5">Sign In</h2>
      <img src="https://i.imgur.com/P9WaSDr.png" className="banner" alt="login-image" />
      <div className="mt-5">
        <GoogleButton
          onClick={signInWithGoogle}
          type="dark"
        />
      </div>
    </div>
  );
};

export default LoginPage;
