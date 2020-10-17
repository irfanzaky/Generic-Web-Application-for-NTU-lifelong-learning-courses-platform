import React, { useState, useEffect} from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from "react-redux";
import { detailsContent } from "../actions/contentActions";import { Link } from "react-router-dom";

const Chapter = ({content}) => {
  return <div>
     <Link className="link" to={"/lecture/" + content.courseID + "/" + content.chapterNo}>
    <h2>Chapter {content.chapterNo}</h2></Link>
    <h3>{content.chapterTitle}</h3>
    <p>{content.chapterSummary}</p>
    <br/>
  </div>;
}

const LectureContent = (props) => {
  const contentDetails = useSelector((state) => state.contentDetails);
  const { content, loading, error } = contentDetails;
  const params = props.match.params;
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsContent(params.courseID));
    return () => {};
  }, []); 

  return (loading ? (
    <div>loading...</div>
  ) : !content ?  (
    <div>{error}</div>
  ) : (
    <div className="flex-super-container">
      {content.map((chapter, index) => 
            <Chapter content={chapter} key={index} />
          )}
    </div>))
};

export default LectureContent;
