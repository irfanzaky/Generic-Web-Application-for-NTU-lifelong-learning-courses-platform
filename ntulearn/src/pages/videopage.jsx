import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from 'query-string';
import { chapterContent } from "../actions/contentActions";
import { Player, LoadingSpinner, ControlBar, PlaybackRateMenuButton, ReplayControl, ForwardControl, BigPlayButton } from 'video-react';
import LectureNavbar from "../components/lecture-navbar";
import LectureContent from "../components/lecture-content";
import LectureQnA from "../components/lecture-qna";
import LectureSummary from "../components/lecture-summary";
import "./App.css";
import "./videopage.css"; 


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
        <Player
          className="react-player"
          playsInline
          autoPlay
          src={getActiveLecture().video}>
          <LoadingSpinner />
          <BigPlayButton position="center" />
          <ControlBar>
            <ReplayControl seconds={5} order={2.1} />
            <ForwardControl seconds={5} order={3.1} />
            <PlaybackRateMenuButton rates={[2.25, 2, 1.5, 1, 0.75]} />
          </ControlBar>
        </Player>
      
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
