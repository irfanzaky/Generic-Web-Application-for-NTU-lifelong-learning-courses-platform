import React from "react";
import { Link } from "react-router-dom";

const LectureNavbar = ({baselink}) => {
  return (
    <div className="Navbar course-navbar">
      <Link to={baselink + "/content"} className="NavbarText">
        Content
      </Link>
      <Link to={baselink + "/qna" } className="NavbarText">
        Q&A
      </Link>
      <Link to={baselink + "/summary" } className="NavbarText">
        Summary
      </Link>
    </div>
  );
};

export default LectureNavbar;
