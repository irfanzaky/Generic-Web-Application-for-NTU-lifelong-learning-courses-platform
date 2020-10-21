import React, { useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

const CourseContent = () => {
  const [courseDesc, setCourseDesc] = useState("");
  const [editable, setEditable] = useState(true)
  const handleButton = () => setEditable(!editable)
  return (
    <div className="flex-super-container">
      <h2>Assignment</h2>
      {
        editable?<CKEditor
          editor={ ClassicEditor }
          data={ courseDesc }
          onInit={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              setCourseDesc(data);
              console.log( { data} );
          } }
      />:  parse(courseDesc)
      }
       <button className="button" onClick={handleButton}>{editable?'true':'false'}</button>
    </div>
  );
};

export default CourseContent;
