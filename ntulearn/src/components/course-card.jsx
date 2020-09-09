import React from "react";
import ntulogo from "../images/hiveHorizon.jpg";
const CourseCard = () => {
  return (
    <div className="course-card">
      <img className="course-img" src={ntulogo} alt="coursecard" />
      <div className="course-card-container">
        <h3>How To Slow Down and Be More Productive</h3>
        <p className="text-box">
          <b>By: Dave Crenshaw</b>
        </p>
        <p className="text-box">
          The pace of life is constantly increasing, yet rather than improving our productivity,
          this increased speed often creates stress and causes us to make mistakes. We will explores
          a handful of tactics....
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
