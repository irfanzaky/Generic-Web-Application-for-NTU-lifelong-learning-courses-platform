import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { updateCourseDesc } from "../actions/coursesActions";
import img from '../images/courseDesc.png';

const CourseDescription = () => {
  const courseDetails = useSelector((state) => state.courseDetails);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const { course, loading } = courseDetails;
  const [editable, setEditable] = useState(false);
  const [courseDesc, setCourseDesc] = useState('');
  const [isenrolled, setEnrolled] = useState(false);
  const [islecturer, setLecturer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setCourseDesc(course.courseDescription)
    setEnrolled(userInfo ? userInfo.courses.includes(course.courseID) : false);
    setLecturer(['lecturer', 'admin'].includes(userInfo? userInfo.role : 'student' ))  ;
    return () => {};
  }, [loading]); 

  const handleButton = () => {
    setEditable(!editable)
    if(editable){
      dispatch(updateCourseDesc(course.courseID,courseDesc));
    }
  };
  const handleOnChange =  ( event, editor ) => {
    const data = editor.getData();
    setCourseDesc(data);
  }
  return (
    <div className="flex-super-container">
      <h2>Course Description</h2>
      {editable?
          <CKEditor
          editor={ ClassicEditor }
          data={ courseDesc }
          onChange={handleOnChange} />:
      <div className='grad1'>{parse(courseDesc)}</div>
      
      }
      {islecturer? 
        <button className="button" onClick={handleButton}>{editable?'save':'edit'}</button>:""}

      <img className='refresher' src={img} alt="refresher" />
    </div>
  );
};

export default CourseDescription;
