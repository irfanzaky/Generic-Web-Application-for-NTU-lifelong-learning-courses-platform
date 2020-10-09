import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";

const Loginpage = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/home");
    }
    return () => {};
  }, [userInfo]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(register(username, email, password));
    console.log(username, email, password, repassword);
  };
  return (
    <div className="loginbg">
      <div className="login-card">
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="field"
            placeholder={"Username"}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="text"
            className="field"
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="field"
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            type="password"
            className="field"
            placeholder={"Password"}
            onChange={(e) => setRepassword(e.target.value)}
          ></input>
          <br />
          <input type="submit" className="field field-button" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
