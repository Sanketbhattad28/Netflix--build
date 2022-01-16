import React, { useState } from "react";
import "./loginScreen.css";
import SignInScreen from "./SignInScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  const signInHandler = () => {
    setSignIn(true);
  };
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix_logo"
        />
        <button className="loginScreen_button" onClick={signInHandler}>
          Sign In
        </button>
        <div className="loginScreen_gradient"> </div>
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited flims, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancle at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="emial" placeholder="Email Address" />
                <button
                  className="loginScreen_getStarted"
                  onClick={signInHandler}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
