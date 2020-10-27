import React from "react";
import { Link } from "react-router-dom";
import queryString from 'query-string';

const LectureNavbar = ({location}) => {
  const {menu, ...others} =  queryString.parse(location.search);
  const queryParam = queryString.stringify(others)
  
  return (
    <div className="Navbar course-navbar">
      <Link to={{
        pathname:  location.baselink,
        search: queryParam + '&menu=content'
      }} className="NavbarText">Content</Link>
      <Link to={{
        pathname:  location.baselink,
        search:queryParam+ '&menu=qna'
      }} className="NavbarText">Q & A</Link>
      <Link to={{
        pathname:  location.baselink,
        search: queryParam + '&menu=summary'
      }} className="NavbarText">Summary</Link>
    </div>
  );
};

export default LectureNavbar;
