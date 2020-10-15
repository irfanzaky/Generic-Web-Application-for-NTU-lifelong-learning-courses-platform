import React, { useEffect } from "react";
import CourseCard from "../components/course-card";
import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "../actions/coursesActions";

const Homepage = () => {
  const courseList = useSelector((state) => state.courseList);
  const { courses, loading, error } = courseList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourses());
    return () => {};
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : error ?  (
    <div>{error}</div>
  ) : (
    <div>
      <div className="header">
        <h1>Wellcome to NTU Lifelong Learning Centre</h1>
        <p>Lorem Ipsum Dolor sit Amet</p>
      </div>
      <div className="flex-super-container">
        <h3>My Course</h3>
        <div className="flex-container">
          {courses.map((course) => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>

        <h3>Popular Course</h3>
        <div className="flex-container">
          {courses.map((course) => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
