import React from "react";
import { useSelector } from "react-redux";
import ntulogo from "../images/error.jpg";
const Profilepage = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div>
      <img className="center" src={ntulogo} alt='error' />
      {JSON.stringify(userInfo)}
    </div>
  );
};

export default Profilepage;
