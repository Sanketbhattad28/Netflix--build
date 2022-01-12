import React from "react";
import "./signInScreen.css";

const SignInScreen = () => {
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="password" type="password"></input>
        <button type="submit"> Sign In</button>
      </form>
    </div>
  );
};

export default SignInScreen;
