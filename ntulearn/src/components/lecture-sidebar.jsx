import React from "react";
import { Link } from "react-router-dom";
import LectureContent from "../components/lecture-content";
import LectureQnA from "../components/lecture-qna";
import LectureSummary from "../components/lecture-summary";

const LectureSidebar = ({menu, lectureContent, baselink})=>{
  switch(menu) {
    case "qna":
      return <div className="menu-wrapper"> 
      </div>
    case "summary":
      return <div className="menu-wrapper">  3
    </div>
    default:
      return <LectureContent lectureContent={lectureContent} ></LectureContent>
  }
}

export default LectureSidebar;
