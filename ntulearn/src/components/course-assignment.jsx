import React, { useState} from 'react';
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'


const CourseContent = () => {
  const url = "https://storage.googleapis.com/kumbigo.appspot.com/HomeWork5%20Irfan%20Zaky%20Harlen.pdf"
  const assignmentURL = "https://storage.googleapis.com/kumbigo.appspot.com/Homework5(1).pdf" 
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }
  return (
    <div className="flex-super-container">
      <h2>Assignment</h2>
      <embed
    src={assignmentURL}
    type="application/pdf"
    height={300}
    width={'100%'}
  />

      <h3>Upload your assignment here:</h3>
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
    <h3>Current uploaded assignment:</h3>
    <embed
    src={url}
    type="application/pdf"
    height={800}
    width={'100%'}
  />
    </div>
  );
};

export default CourseContent;
