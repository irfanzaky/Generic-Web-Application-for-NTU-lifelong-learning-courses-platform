import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  function handleOnClick() {}

  return (
    <Link className="link" to={"/course/" + course._id}>
      <div className="course-card" onClick={handleOnClick}>
        <img className="course-img" src={course.img} alt={course.img} />
        <div className="course-card-container">
          <h3>{course.title}</h3>
          <p className="text-box">
            <b>By: {course.lecturer}</b>
          </p>
          <p className="text-box">{course.summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
