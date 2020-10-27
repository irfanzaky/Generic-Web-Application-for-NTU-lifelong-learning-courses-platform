import React from "react";
import { Link } from "react-router-dom";
import queryString from 'query-string';
const Lecture = ({content, index, location}) => {
  const {lecture, ...others} =  queryString.parse(location.search);
  const queryParam = queryString.stringify(others);

  return <div>
     <Link className="link" to={{
    pathname:  location.baselink,
    search: queryParam + '&lecture=' + index
  }}>
     <div>
          {content.title}<br/>
          {Math.floor(content.duration/60)}m {(content.duration%60)}s <bt/>
        </div></Link>
    <br/>
  </div>;
}

const Contents = ({ lectureContent, location }) => {
  return (<div className="menu-wrapper">  
  <h4>{ lectureContent.chapterTitle}</h4 ><br/>
  {lectureContent.lecture.map((content, index) => 
    <Lecture content={content} index={index} location={location}></Lecture>
  )}
</div>)
};

export default Contents;
