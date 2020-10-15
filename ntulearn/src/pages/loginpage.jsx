import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userAction";

const Loginpage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo} = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/home");
    }
    return () => {};
  }, [userInfo]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(signin(email, password));
    console.log(email, password);
  };
  return (
    <div className="loginbg">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="field"
            placeholder={"Username"}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="field"
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <input type="submit" className="field field-button" value=" Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
