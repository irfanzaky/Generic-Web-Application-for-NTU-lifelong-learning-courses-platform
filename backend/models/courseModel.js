import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseID: { type: String, required: true },
  courseName: { type: String, required: true },
  courseLecturer: { type: String, required: true },
  courseImage: { type: String, required: true },
  courseCategory: [String],
  summary: { type: String, required: true },
  courseDescription: { type: String, required: true },
  announcement: [String],
  contents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
      required: true,
    },
  ],
  assignment: [String],
});

const coursesSchema = new mongoose.Schema({
  courseID: { type: String, required: true },
  courseName: { type: String, required: true },
  courseLecturer: { type: String, required: true },
  courseImage: { type: String, required: true },
  courseCategory: [String],
  summary: { type: String, required: true },
  courseRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const coursesModel = mongoose.model("Courses", coursesSchema);
