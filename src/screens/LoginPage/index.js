import React from "react";
import "./index.css";
import LoginImg from "../../Images/LoginImg.svg";
import GoogleLogo from "../../Images/googleIcon.png";
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
      <img src={LoginImg} className="banner" alt="login-image" />
      <div className="card">
        <h2 className="header">Sign In</h2>
        <div className="button-wrapper">
          <button onClick={signInWithGoogle}>
            <img src={GoogleLogo} className="google-logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
