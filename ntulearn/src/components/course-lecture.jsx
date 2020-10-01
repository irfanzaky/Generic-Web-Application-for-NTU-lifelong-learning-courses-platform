import React from "react";
import ReactPlayer from "react-player";
import "./App.css";

const CourseAnnouncement = () => {
  return (
    <div className="lecture-container">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
        />
      </div>
      <div className="menu-wrapper">
        <ul>
          <li>Contents</li>
          <li>Q&A</li>
          <li>Summary</li>
        </ul>
        <h3>Introduction</h3>
        <p>Successfull applicant come from</p>
      </div>
    </div>
  );
};

export default CourseAnnouncement;
