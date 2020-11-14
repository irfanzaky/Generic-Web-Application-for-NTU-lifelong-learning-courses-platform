import React, { useState, useEffect} from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from "react-redux";
import { detailsContent } from "../actions/contentActions";
import { Link } from "react-router-dom";
import lock from "../images/lock.png";
import img from '../images/content.png';

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
  const userSignin = useSelector((state) => state.userSignin);
  const contentDetails = useSelector((state) => state.contentDetails);
  const { content, loading, error } = contentDetails;
  const { userInfo } = userSignin;
  const [isenrolled, setEnrolled] = useState(false);
  const [islecturer, setLecturer] = useState(false);
  const dispatch = useDispatch();
  const params = props.match.params;

  useEffect(() => {
    dispatch(detailsContent(params.courseID));
    setEnrolled(userInfo ? userInfo.courses.includes(params.courseID) : false);
    setLecturer(['lecturer', 'admin'].includes(userInfo? userInfo.role : 'student' ))  ;
    return () => {};
  }, []); 


  if(isenrolled)
    return (loading ? (
      <div>loading...</div>
    ) : !content ?  (
      <div>{error}</div>
    ) : (
      <div className="flex-super-container">
        {content.map((chapter, index) => 
          <Chapter content={chapter} key={index} />)}
          <img className='refresher2' src={img} alt="refresher" />
      </div>))
  else
    return (<div className="flex-super-container center-all">
    <img className="center" src={lock} alt='lock' />
    <h3>You don't have permission to view this page</h3>
    <p> Please Enrolled to this course to have access to this page</p>
    </div>)
};

export default LectureContent;
