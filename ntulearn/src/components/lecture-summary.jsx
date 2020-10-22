import React from "react";

const Contents = ({ lectureContent, location }) => {
  return (<div className="menu-wrapper">  
  <h4>{ lectureContent.chapterTitle}</h4 ><br/>
  { lectureContent.chapterSummary}<br/>
  
  
</div>)
};

export default Contents;
