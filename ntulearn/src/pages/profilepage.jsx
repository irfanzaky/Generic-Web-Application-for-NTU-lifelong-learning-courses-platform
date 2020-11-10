import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";

const Profilepage = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  let history = useHistory();
  const handleLogout = () => {
    Cookie.remove("userInfo")
    history.push("/home")
    history.go(0)
  };
  return (
    <div className="flex-super-container">
      <p>Username   : {userInfo.username}</p>
      <p>Email      : {userInfo.email}</p>
      <p>Role: {userInfo.role}</p>
      <p>Course Enrolled: </p><ul>
          {userInfo.courses.map((c)=><li>{c}</li>)}
      </ul>
      
      <button className="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profilepage;
