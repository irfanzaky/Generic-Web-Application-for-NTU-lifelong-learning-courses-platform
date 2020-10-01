import React from "react";
import { Link } from "react-router-dom";

const CourseNavbar = ({ params }) => {
  return (
    <div className="Navbar course-navbar">
      <Link to={`/course/${params.courseID}/desc`} className="NavbarText">
        Course Description
      </Link>
      <Link to={`/course/${params.courseID}/announcement`} className="NavbarText">
        Announcement
      </Link>
      <Link to={`/course/${params.courseID}/content`} className="NavbarText">
        Contents
      </Link>
      <Link to={`/course/${params.courseID}/assignment`} className="NavbarText">
        My Assignment
      </Link>
    </div>
  );
};

export default CourseNavbar;
