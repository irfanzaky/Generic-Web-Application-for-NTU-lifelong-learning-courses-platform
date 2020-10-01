import React from "react";
const Loginpage = () => {
  return (
    <div className="loginbg">
      <div class="login-card">
        <h1>Login</h1>
        <form action="/home">
          <input type="text" className="field" placeholder={"Username"}></input>
          <input type="password" className="field" placeholder={"Password"}></input>
          <br />
          <input type="submit" className="field field-button" value=" Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
