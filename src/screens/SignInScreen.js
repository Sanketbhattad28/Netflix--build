import React, { useRef } from "react";
import "./signInScreen.css";
import { auth } from "../Firebase";

const SignInScreen = () => {
  const emialRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emialRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => alert(error.message));
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emialRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emialRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password"></input>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signInScreen_grey">New to Netflix? </span>
          <span className="signInScreen_link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
