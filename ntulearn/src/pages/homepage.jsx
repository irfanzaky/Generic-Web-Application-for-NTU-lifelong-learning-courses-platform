import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import CourseCard from "../components/course-card";
import { listCourses } from "../actions/coursesActions";

const Homepage = () => {
  const courseList = useSelector((state) => state.courseList);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const { courses, loading, error } = courseList;
  const [editable, setEditable] = useState(false);
  const [description, setDescription] = useState('');
  const [isAdmin, setAdmin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription('<p>In line with the government’s emphasis on advancing adult education and professional development for Singapore’s workforce to better meet future challenges, NTU’s colleges and schools, institutes and centres offer an extensive range of Continuing Education Training programmes, to equip our alumni and working adults with updated knowledge and relevant skills sets to meet their learning needs and changing job demands.</p><p>At NTU, we recognise the value of SkillsFuture and we are strongly committed towards helping to realise this national push for lifelong learning. Some of the programmes offered by NTU are also eligible for course fee funding. &nbsp;</p><p><strong>Click on the respective schools below to learn more about the programmes:</strong></p><p><a href="http://pace.ntu.edu.sg/"><strong>Centre for Professional and Continuing Education (PaCE@NTU)</strong></a><br>PaCE@NTU develops quality programmes for continuing professional education and development, to equip Singapore professionals, managers and executives (PMEs) with updated knowledge and skills to keep pace with the rapid technological changes in today’s increasingly competitive economy and industrial landscape.<br>&nbsp;</p><p><a href="http://www.nbs.ntu.edu.sg/Programmes/nee/Pages/Home.aspx"><strong>Nanyang Business School (College of Business)</strong></a><br>Nanyang Executive Education (NEE), a division of Nanyang Business School offers cutting-edge executive education programmes to enhance the leadership skills and competencies of executives. Anchored by award-winning faculty and notable industry practitioners, NEE places strong emphasis on practical applications. By combining critical management knowledge with real-world applications, we equip our participants with skills to thrive in today’s increasingly dynamic and interconnected world.</p>')
    dispatch(listCourses());
    return () => {};
  }, []); 

  useEffect(() => {
    setAdmin(['admin'].includes(userInfo ? userInfo.role : 'student'));
    return () => {};
  }, [loading]); 
  
  const handleButton = () => setEditable(!editable);
  const handleOnChange =  ( event, editor ) => {
    const data = editor.getData();
    setDescription(data);
    console.log(data)
  }
  return loading ? (
    <div>loading...</div>
  ) : error ?  (
    <div>{error}</div>
  ) : (
    <div>
      <div className="header">
        <h1>Welcome to NTU Lifelong Learning Centre</h1>
        <p></p>
      </div>

      <div className="flex-super-container">
      <h2>What is NTU Lifelong Learning Centre</h2>
      {editable?
          <CKEditor
          editor={ ClassicEditor }
          data={ description }
          onChange={handleOnChange} />:
      parse(description)
      }
      {isAdmin? <button className="button" onClick={handleButton}>{editable?'save':'edit'}</button>:""}
      

      
      <h3>Courses Available</h3>
      <div className="flex-container">
        {courses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>
      </div>
    </div>
  );
};

  
export default Homepage;
