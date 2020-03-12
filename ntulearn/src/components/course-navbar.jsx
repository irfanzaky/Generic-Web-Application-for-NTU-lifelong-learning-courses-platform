import React, { Component } from "react";

class CourseNavbar extends Component {
  state = {};

  render() {
    return (
      <div className="Navbar course-navbar">
        <button>Course Description</button>
        <button>Announcement</button>
        <button>Contents</button>
        <button>Assignment</button>
      </div>
    );
  }
}

export default CourseNavbar;
