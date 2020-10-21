import React, { useEffect, useState }  from "react";
import { Switch, Route, Link  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsContent } from "../actions/contentActions";
import ReactPlayer from "react-player";
import LectureSidebar from "../components/lecture-sidebar";
import LectureNavbar from "../components/lecture-navbar";
import "./App.css";

const LectureComponent = (props) => {
  const contentDetails = useSelector((state) => state.contentDetails);
  const params = props.match.params;
  const { content, loading, error } = contentDetails;
  const { courseID, chapter, menu, index} = params;
  const activeChapter = content[chapter-1] ;
  const baselink = "/lecture/" + courseID + "/" + chapter;
  const [activeLecture, setActiveLecture] = useState("https://www.youtube.com/watch?v=ysz5S6PUM-U");
  const getActiveLecture = (activeChapter, index) => {
    console.log(activeChapter, index)
    return (activeLecture? activeChapter.lecture: "https://www.youtube.com/watch?v=ysz5S6PUM-U")
  }
  
  console.log("params", params );
  console.log(activeLecture)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsContent(courseID));
    return () => {};
  }, []); 

  useEffect(() => {
    const newActiveLecture = getActiveLecture(activeLecture, 0)
    setActiveLecture(newActiveLecture)
    return () => {};
  }, [params]); 

  return (loading ? (
    <div>loading...</div>
  ) : !activeChapter ?  (
    <div>{error}</div>
  ) : (
    <div className="lecture-container">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <LectureNavbar baselink={baselink} />
        <LectureSidebar menu={menu}  baselink={baselink} activeChapter={activeChapter}></LectureSidebar> 
        {JSON.stringify(activeChapter.lecture[{index}])}
      </div>
    </div>
  ))
};

export default LectureComponent;
