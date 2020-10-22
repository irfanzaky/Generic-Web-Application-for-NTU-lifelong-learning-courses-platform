import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from 'query-string';
import { chapterContent } from "../actions/contentActions";
import ReactPlayer from "react-player";
import LectureSidebar from "../components/lecture-sidebar";
import LectureNavbar from "../components/lecture-navbar";
import LectureContent from "../components/lecture-content";
import LectureQnA from "../components/lecture-qna";
import LectureSummary from "../components/lecture-summary";
import "./App.css";

const LectureComponent = (props) => {
  const contentDetails = useSelector((state) => state.contentDetails);
  const { content, loading, error } = contentDetails;
  
  const queryParam = queryString.parse(props.location.search);
  const {lecture=0, menu='content'} = queryParam;
  const {courseID, chapter} = props.match.params;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chapterContent(courseID, chapter));
    return () => {};
  }, []); 

  const lectureContent = content[0];
  const getActiveLecture = () => lectureContent.lecture[lecture];

  return (loading ? (
    <div>loading...</div>
  ) : !lectureContent ?  (
    <div>there is error: {error}</div>
  ) : (
    <div className="lecture-container">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={getActiveLecture().video}
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <LectureNavbar location={props.location} />
          { menu=="qna"?<LectureQnA  />:
            menu=="summary"?<LectureSummary lectureContent={lectureContent} />:
            <LectureContent 
              lectureContent={lectureContent}
              location={props.location} />
          }
      </div>
    </div>
  ))
};

export default LectureComponent;
