import React, { useState, useEffect} from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from "react-redux";
import { detailsContent } from "../actions/contentActions";
import { Link } from "react-router-dom";
import lock from "../images/lock.png";
import img from '../images/content.png';
import { set } from 'mongoose';

const Chapter = ({content}) => {
  const [title, setTitle] = useState(content.chapterTitle);
  const [summary, setSummary] = useState(content.chapterSummary);
  if (content.editable){
    return <div>
     <Link className="link" to={"/lecture/" + content.courseID + "/" + content.chapterNo}>
    <h2>Chapter {content.chapterNo}</h2></Link>
    <h3>{content.chapterTitle}</h3>
    <p>{content.chapterSummary}</p>
    <br/>
    </div>}
  else{
    return (
      <div>
        <h2>Chapter {content.chapterNo}</h2>
      <Details 
    title={title}
    summary={summary}
    setTitle={setTitle}
    setSummary={setSummary}/>
      </div>)
  }
}

const Details = ({title, setTitle, summary, setSummary})=> {

  return(
    <form>
      <label> Chapter Title : </label><br/>
      <input
        type="text"
        className="inputform"
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input><br/>
      <label> Chapter Summary : </label><br/>
      <textarea
        type="text"
        className="inputform"
        placeholder={"Summary"}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </form>)
}

const LectureContent = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const contentDetails = useSelector((state) => state.contentDetails);
  const { content, loading, error } = contentDetails;
  const [courseContent, setCourseContent] = useState('');
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

  const updateList = (list,index,update) => {;
    return [...list.slice(0,index), update,...list.slice(index+1)]}

  const handleEdit = (i) => (title, summary) =>{
    const newData = {...courseContent[i], 
      title, summary, editable: !courseContent[i].editable};
    const updatedContent = updateList(courseContent, i, newData);
    setCourseContent(updatedContent);
    if(courseContent[i].editable){
      //dispatch(updateCourseAnn(course.courseID,newAnnoucement));
    }
  }


  if(isenrolled)
    return (loading ? (
      <div>loading...</div>
    ) : !courseContent ?  (
      <div>{error}</div>
    ) : (
      <div className="flex-super-container">
        {courseContent.map((chapter, index) => 
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
