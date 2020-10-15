import React, { useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

const CourseContent = () => {
  const [courseDesc, setCourseDesc] = useState("<p><strong>Travel Declaration + LOA (upon return from China on/after 14 Jan) and follow up</strong><br>Posted on: Tuesday, January 28, 2020 11:06:23 PM SGT</p><p>Dear EE3017/IM2003 Students,&nbsp;<br>Based on the email from Chief Health, Safety &amp; Emergency Officer yesterday to all faculty, staff, and students (find the letter here: updated travel and health advisory, please take note of the following if you had travelled to mainland China and returned to Singapore on or after 14 Jan 2020:</p><ol><li>You are required to take Leave of Absence (LOA) for 14 days from the day after you arrive in Singapore. Please DO NOT come to the EE3017/IM2003 tutorial class during your LOA. Please write to me via email if you will be/are on LOA for this reason. I'll follow up with you separately to provide the necessary academic help within the next two weeks.</li><li>For students with a residential place in Singapore outside the NTU campus, you must remain at your residential place during your LOA, even if you have no visible symptoms of illness.</li><li>For international students with NTU campus accommodation, you will be assigned a room at Graduate Hall 1 for 14 days. These rooms will be in a block dedicated for isolation purposes only.</li></ol><p><br><strong>To all students:</strong></p><p>Please note that you are required to make a Travel Declaration (click on this link) online latest by tomorrow 29 January 2020. This information is vital to help NTU safeguard the health of everyone in the community.</p><p>Stay healthy and stay connected.&nbsp;<br>Best regards,</p><p><br>Michelle</p>");
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
