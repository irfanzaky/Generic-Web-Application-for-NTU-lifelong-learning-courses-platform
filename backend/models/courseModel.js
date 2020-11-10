import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time : { type : Date, default: Date.now },
  content: { type: String, required: true },
}, {timestamps: true});

const courseSchema = new mongoose.Schema({
  courseID: { type: String, required: true, dropDups: true },
  courseName: { type: String, required: true },
  courseLecturer: { type: String, required: true },
  courseImage: { type: String, required: true },
  courseCategory: [String],
  summary: { type: String, required: true },
  courseDescription: { type: String, required: true },
  announcement: [announcementSchema],
  contents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
      required: true,
    },
  ],
  assignmentQ: String,
  assignment: [{
    url:String, 
    email:String, 
    username: String, 
    date: { type: Date, default: Date.now }}],
  
});

const courseModel = mongoose.model("Course", courseSchema);

export default courseModel;
