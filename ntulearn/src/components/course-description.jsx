import React, { useState, useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { useSelector } from "react-redux";

const CourseDescription = () => {
  const courseDetails = useSelector((state) => state.courseDetails);
  const { course, loading } = courseDetails;
  const [editable, setEditable] = useState(false);
  const [courseDesc, setCourseDesc] = useState('');

  useEffect(() => {
    setCourseDesc(course.courseDescription)
    return () => {};
  }, [loading]); 


  const handleButton = () => setEditable(!editable);
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
      parse(courseDesc)
      }
       <button className="button" onClick={handleButton}>{editable?'save':'edit'}</button>
    </div>
  );
};

export default CourseDescription;
