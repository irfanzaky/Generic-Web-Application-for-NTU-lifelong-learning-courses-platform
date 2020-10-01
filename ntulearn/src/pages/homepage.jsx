import React, { useEffect } from "react";
import CourseCard from "../components/course-card";
import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "../actions/coursesActions";

const Homepage = () => {
  const courseList = useSelector((state) => state.courseList);
  const { courses, loading, error } = courseList;

  // console.log("hello: ", courses, loading, error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCourses());
    return () => {};
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="header">
        <h1>Hello from Homepage</h1>
        <p>This should be an image</p>
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
