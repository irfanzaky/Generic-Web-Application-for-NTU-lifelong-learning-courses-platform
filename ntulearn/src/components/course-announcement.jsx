import React, { useState, useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from "react-redux";
import { updateCourseAnn } from "../actions/coursesActions";
import lock from "../images/lock.png";
import img from '../images/announcement.png';

const Annoucement = ({announcement, handleEdit, handleOnChange,isLecturer}) => {
  return (<div className='grad1'>
    {announcement.editable?
      <CKEditor  
      editor={ ClassicEditor }
      data={ announcement.content  }
      onChange={handleOnChange}
      />:
      <div>
        <h3>{announcement.title}</h3>
        <p>Posted on: {announcement.time}</p>
        {parse(announcement.content)}
      </div> }
    {isLecturer?<button className="button" onClick={handleEdit}>{announcement.editable?'save':'edit'}</button>:""}
  </div>)
}

const CourseAnnouncement = () => {
  const courseDetails = useSelector((state) => state.courseDetails);
  const userSignin = useSelector((state) => state.userSignin);
  const { course, loading, error } = courseDetails;
  const { userInfo } = userSignin;
  const [courseAnnouncement, setCourseAnnouncement] = useState('');
  const [isenrolled, setEnrolled] = useState(false);
  const [islecturer, setLecturer] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setCourseAnnouncement(course.announcement);
    setEnrolled(userInfo.courses.includes(course.courseID));
    setLecturer(['lecturer', 'admin'].includes(userInfo.role || 'student'));
    return () => {};
  }, [loading]); 

  const updateList = (list,index,update) => {;
    return [...list.slice(0,index), update,...list.slice(index+1)]}

  const handleOnChange = (i)  => ( event, editor ) => {
    const newData = editor.getData();
    const updatedData = {...courseAnnouncement[i], content: newData};
    const newAnnoucement = updateList(courseAnnouncement, i, updatedData);
    setCourseAnnouncement(newAnnoucement);
  }
  const handleEdit = (i) => () =>{
    const newData = {...courseAnnouncement[i], editable: !courseAnnouncement[i].editable};
    const newAnnoucement = updateList(courseAnnouncement, i, newData);
    setCourseAnnouncement(newAnnoucement);
    if(courseAnnouncement[i].editable){
      dispatch(updateCourseAnn(course.courseID,newAnnoucement));
    }
  }
  if (isenrolled){
  return (loading ? (
    <div>loading...</div>
  ) : !courseAnnouncement ?  (
    <div>{error}</div>
  ) : (
    <div className="flex-super-container">
      <h2>Announcement</h2>
      {courseAnnouncement.map((announcement, index) => (
      <Annoucement 
        announcement={announcement} 
        handleOnChange={handleOnChange(index)}
        handleEdit={handleEdit(index)}
        index={index} 
        key={index}
        isLecturer={islecturer} />
    ))}
    <img className='refresher2' src={img} alt="refresher" />
    </div>))}
  else
    return (<div className="flex-super-container center-all">
      <img className="center" src={lock} alt='lock' />
      <h3>You don't have permission to view this page</h3>
      <p> Please Enrolled to this course to have access to this page</p>
      </div>)
};

export default CourseAnnouncement;
