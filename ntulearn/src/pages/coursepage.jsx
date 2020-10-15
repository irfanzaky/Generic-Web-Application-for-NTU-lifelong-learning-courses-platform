import React, { useEffect } from "react";
import CourseNavbar from "../components/course-navbar";
import CourseDescription from "../components/course-description";
import CourseAnnouncement from "../components/course-announcement";
import CourseAssignment from "../components/course-assignment";
import CourseContents from "../components/course-content";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsCourse } from "../actions/coursesActions";

const Coursepage = (props) => {
  const courseDetails = useSelector((state) => state.courseDetails);
  const { course, loading, error } = courseDetails;
  const params = props.match.params;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsCourse(params.courseID));
    return () => {};
  }, []); 

  return loading ? (
    <div>loading...</div>
  ) : !course ?  (
    <div>{error}</div>
  ) : (
    <div>
      <div className="header">
      <h1>{course.courseName}</h1>
        <p>{course.summary}</p>
      </div>
      <CourseNavbar params={params} />

      <Switch>
        <Route path="/course/:courseID/" exact component={CourseDescription} />
        <Route path="/course/:courseID/announcement" component={CourseAnnouncement} />
        <Route path="/course/:courseID/content" component={CourseContents} />
        <Route path="/course/:courseID/assignment" component={CourseAssignment} />
      </Switch>
    </div>
  );
};

export default Coursepage;
