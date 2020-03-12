import React, { Component } from "react";
import CourseNavbar from "../components/course-navbar";
import CourseDescription from "../components/course-description";
import CourseAnnouncement from "../components/course-announcement";
import CourseAssignment from "../components/course-description";
import CourseContents from "../components/course-announcement";

class Coursepage extends Component {
  state = { courseTab: "CourseAnnouncement" };

  handleCourseNavbar = Tab => {
    this.setState({ courseTab: { Tab } });
  };

  render() {
    const StateTag = `h2`;
    const StateTags = `${this.state.courseTab}`;
    return (
      <div>
        <div className="header">
          <h1>Hello from Coursepage</h1>
          <p>This should be an image</p>
        </div>
        <CourseNavbar />
        <StateTags>yuhuuu</StateTags>
        <StateTag>teeeesst</StateTag>
        <CourseAnnouncement></CourseAnnouncement>

        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Hello
        </button>
        <div className="footer">
          <h1>Hello from footer</h1>
          <p>This should be an image</p>
        </div>
      </div>
    );
  }
}

export default Coursepage;
