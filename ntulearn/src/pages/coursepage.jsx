import React, { useEffect } from "react";
import CourseNavbar from "../components/course-navbar";
import CourseDescription from "../components/course-description";
import CourseAnnouncement from "../components/course-announcement";
import CourseAssignment from "../components/course-description";
import CourseContents from "../components/course-announcement";
import { Switch, Route } from "react-router-dom";
import { generatePath } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { detailsCourse } from "../actions/coursesActions";

const Coursepage = (props) => {
  const courseDetails = useSelector((state) => state.courseDetails);
  const { course, loading, error } = courseDetails;
  const params = props.match.params;
  console.log(params);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsCourse(params.courseID));
    return () => {};
  }, []);

  // function updateMenu(id, menu) {
  //   const path = generatePath(this.props.match.path, { menu, id });
  //   this.props.history.replace(path);
  // }
  return (
    <div>
      <div className="header">
        <h1>Hello from Coursepage</h1>
        <p>This should be an image</p>
      </div>
      <CourseNavbar params={params} />
      <p>{JSON.stringify(course)}</p>

      <Switch>
        <Route path="/course/:courseID/desc" component={CourseDescription} />
        <Route path="/course/:courseID/announcement" component={CourseAnnouncement} />
        <Route path="/course/:courseID/content" component={CourseContents} />
        <Route path="/course/:courseID/assignment" component={CourseAssignment} />
      </Switch>
    </div>
  );
};

export default Coursepage;
