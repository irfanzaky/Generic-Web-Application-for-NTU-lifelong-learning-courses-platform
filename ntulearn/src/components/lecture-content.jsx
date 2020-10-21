import React from "react";
import { Switch, Route, Link  } from "react-router-dom";

const Lecture = ({lecture,baselink, index}) => {
  return <div>
     <Link className="link" to={baselink+"/content/"+ index}>
     <div>
          {lecture.title}<br/>
          {Math.floor(lecture.duration/60)}m {(lecture.duration%60)}s
        </div></Link>
    <br/>
  </div>;
}

const Contents = ({ activeChapter, baselink }) => {
  return (<div className="menu-wrapper">  
  <h4>{ activeChapter.chapterTitle}</h4><br/>
  {activeChapter.lecture.map((lecture, index) => 
  <Lecture lecture={lecture} baselink={baselink} index={index}></Lecture>
  )}
</div>)
};

export default Contents;
