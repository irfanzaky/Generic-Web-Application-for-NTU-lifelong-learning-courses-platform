import React, { useState, useEffect} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import { useSelector } from "react-redux";

const Annoucement = ({announcement, handleEdit, handleOnChange, index}) => {
  return (<div>
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

    <button className="button" onClick={handleEdit}>{announcement.editable?'save':'edit'}</button>
  </div>)
}


const CourseAnnouncement = () => {
  const courseDetails = useSelector((state) => state.courseDetails);
  const { course, loading, error } = courseDetails;
  const [courseAnnouncement, setCourseAnnouncement] = useState('');
  
  useEffect(() => {
    const courseAnnouce = course.announcement.map((a)=> {
      a.editable = false;
      return a;
    })
    setCourseAnnouncement(course.announcement);
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
  }
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
              key={index} />
          ))}
    </div>))
};

export default CourseAnnouncement;
