import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Loginpage from "./pages/loginpage";
import Homepage from "./pages/homepage";
import Coursepage from "./pages/coursepage";
import Videopage from "./pages/videopage";
import Errorpage from "./pages/errorpage";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={Loginpage} />
          <Route path="/course/" component={Coursepage} />
          <Route path="/course/:courseID" component={Coursepage} />
          <Route path="/video" component={Videopage} />
          <Route component={Errorpage} />
        </Switch>
      </>
    );
  }
}

export default App;
