import React from "react";
import "./index.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import firebaseConfig from ""                                                    to be imported from where it is going to be defined

const LoginPage = () => {
  const signInWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const provider = new GoogleAuthProvider();

  return (
    <div className="login">
      <button onClick={signInWithGoogle}>Google</button>
    </div>
  );
};

export default LoginPage;
