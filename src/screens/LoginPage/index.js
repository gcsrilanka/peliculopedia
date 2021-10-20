import React from "react";
import "./index.css";
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
      <svg width='57' height='50' viewBox='0 0 57 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.6295 23.3549L17.7393 22.6553C20.6458 22.0013 22.6926 20.943 23.8796 19.4801C25.0621 17.9969 25.4063 16.1577 24.9125 13.9626C24.4141 11.7471 23.4362 10.2481 21.9789 9.46555C20.5419 8.67843 18.5328 8.57524 15.9515 9.15598L11.6527 10.1231L14.6295 23.3549ZM34.3798 11.4803C35.4589 16.2771 34.7802 20.2842 32.3437 23.5016C29.9275 26.7144 25.9551 28.9428 20.4266 30.1866L16.3717 31.0988L19.9385 46.9526L10.4872 49.0789L0.459175 4.50552L14.697 1.3023C20.1036 0.0859419 24.4722 0.330949 27.803 2.03732C31.1495 3.71879 33.3417 6.86644 34.3798 11.4803Z' fill='#E9E00A' />
            <path d='M46.9315 33.8174L39.6033 31.7105L46.5075 1.9275L56.8991 4.91504L46.9315 33.8174ZM34.9984 41.5071C35.482 39.8252 36.298 38.6833 37.4465 38.0814C38.5951 37.4795 40.0303 37.426 41.7522 37.9211C43.414 38.3988 44.5688 39.2077 45.2166 40.3477C45.8843 41.4935 45.9822 42.8873 45.5101 44.5292C45.0554 46.1109 44.2351 47.2299 43.0493 47.8861C41.8692 48.5224 40.4583 48.6044 38.8165 48.1324C37.1346 47.6489 35.9598 46.8342 35.292 45.6885C34.63 44.5227 34.5322 43.1289 34.9984 41.5071Z' fill='#E9E00A' />
          </svg>
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
