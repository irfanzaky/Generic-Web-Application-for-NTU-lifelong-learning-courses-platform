import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loginpage from "./pages/loginpage";
import Homepage from "./pages/homepage";
import Coursepage from "./pages/coursepage";
import Videopage from "./components/course-lecture";
import Errorpage from "./pages/errorpage";
import Registerpage from "./pages/registerpage";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <Navbar userInfo={userInfo} />
      <Switch>
        <Route path="/home" component={Homepage} />
        <Route path="/" exact component={Loginpage} />
        <Route path="/register" component={Registerpage} />
        <Route path="/course/:courseID" component={Coursepage} />
        <Route path="/course/:courseID/:menu" component={Coursepage} />
        <Route path="/video" component={Videopage} />
        <Route component={Errorpage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
