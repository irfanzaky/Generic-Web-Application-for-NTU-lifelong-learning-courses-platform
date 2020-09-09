import React, { useState, useEffect } from "react";
import CourseNavbar from "../components/course-navbar";
import CourseDescription from "../components/course-description";
import CourseAnnouncement from "../components/course-announcement";
import CourseAssignment from "../components/course-description";
import CourseContents from "../components/course-announcement";

const Coursepage = () => {
  const [courseTab, serCourseTab] = useState("Course Description");

  return (
    <div>
      <div className="header">
        <h1>Hello from Coursepage</h1>
        <p>This should be an image</p>
      </div>
      <CourseNavbar />

      <CourseAnnouncement></CourseAnnouncement>

      <div className="footer">
        <h1>Hello from footer</h1>
        <p>This should be an image</p>
      </div>
    </div>
  );
};

export default Coursepage;
