import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loginpage from "./pages/loginpage";
import Homepage from "./pages/homepage";
import Coursepage from "./pages/coursepage";
import Videopage from "./components/course-lecture";
import Errorpage from "./pages/errorpage";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route path="/" exact component={Loginpage} />
          <Route path="/course/:courseID" component={Coursepage} />
          <Route path="/course/:courseID/:menu" component={Coursepage} />
          <Route path="/video" component={Videopage} />
          <Route component={Errorpage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
