import React from "react";
import "./index.css";
import LoginImg from "../../Images/LoginImg.svg";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
  // const auth = getAuth();
  // const provider = new GoogleAuthProvider();
  // const signInWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const user = result.user;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="login">
      <h2 className="header">Sign In</h2>
      <img src={LoginImg} className="banner" alt="login-image" />
      <div className="button-wrapper">
        <button
          type="button"
          class="login-google"
          // onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
