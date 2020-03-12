import React, { Component } from "react";
import CouseCard from "../components/course-card";
class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="header">
          <h1>Hello from Homepage</h1>
          <p>This should be an image</p>
        </div>

        <div className="flex-super-container">
          <h3>My Course</h3>
          <div className="flex-container">
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
          </div>
          <h3>Popular Course</h3>
          <div className="flex-container">
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
          </div>
          <h3>Recommended Coursess</h3>
          <div className="flex-container">
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
            <CouseCard></CouseCard>
          </div>
        </div>

        <div className="footer">
          <h1>Hello from footer</h1>
          <p>This should be an image</p>
        </div>
      </div>
    );
  }
}

export default Homepage;
