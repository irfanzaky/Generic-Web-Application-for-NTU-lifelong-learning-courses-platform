import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {

  return (
    <Link className="link" to={"/course/" + course.courseID}>
      <div className="course-card">
        <img className="course-img" src={course.courseImage} alt={course.courseImage} />
        <div className="course-card-container">
          <h3>{course.title}</h3>
          <p className="text-box">
            <b>By: {course.courseLecturer}</b>
          </p>
          <p className="text-box">{course.summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
