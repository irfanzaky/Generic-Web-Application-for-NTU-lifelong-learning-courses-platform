import React, { useState, useEffect} from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import { useDispatch, useSelector } from "react-redux";
import { uploadAssignment } from "../actions/coursesActions";
import lock from "../images/lock.png";
import img from "../images/assignment.png";

const CourseContent = (props) => {
  const [assignment, setAssignment] = useState("");
  const [isenrolled, setEnrolled] = useState(false);
  const [islecturer, setLecturer] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const params = props.match.params;
  const dispatch = useDispatch();  

  useEffect(() => {
    setEnrolled(userInfo.courses.includes(params.courseID));
    setLecturer(['lecturer', 'admin'].includes(userInfo.role || 'student'));
    return () => {};
  }, []); 


  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta));
    let uploaded_url = 'https://ntulearn-files.s3-ap-southeast-1.amazonaws.com/'+files[0].meta.name;
    let assignment_info = {
      username:userInfo.username,
      email:userInfo.email,
      url: uploaded_url};

    dispatch(uploadAssignment(params.courseID,assignment_info))
    setAssignment(uploaded_url)
    allFiles.forEach(f => f.remove())}

  if(isenrolled)
    return (
      <div className="flex-super-container">
        <h2>Assignment</h2>

          <p></p>

        <h3>Upload your assignment here:</h3>
          <Dropzone
            getUploadParams={() => ({ url: 'http://localhost:5000/api/uploads/s3' })}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*,.pdf"
          />
          {
            (assignment)?
            (<><h3>Current uploaded assignment:</h3>
              <embed
              src={assignment}
              type="application/pdf"
              height={800}
              width={'100%'}/></>):''
          }
      <img className='refresher2' src={img} alt="refresher" />
      </div>
    );
  else
    return (<div className="flex-super-container center-all">
    <img className="center" src={lock} alt='lock' />
    <h3>You don't have permission to view this page</h3>
    <p> Please Enrolled to this course to have access to this page</p>
    </div>)
};

export default CourseContent;
