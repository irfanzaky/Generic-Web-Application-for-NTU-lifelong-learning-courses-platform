import mongoose from "mongoose";

const qnaSchema = new mongoose.Schema({
  username: { type: String, required: true },
  question: { type: String, required: true },
  answer: [{ username: String, answer: String }],
});

const LectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  video: { type: String, required: true },
  duration: [number],
});

const contentSchema = new mongoose.Schema({
  courseID: { type: String, required: true },
  chapterNo: Number,
  chapterTitle: { type: String, required: true },
  chapterSummary: { type: String, required: true },
  chapterDocument: [String],
  chapterQnA: [qnaSchema],
  courseCategory: [String],
  Lecture: [LectureSchema],
});

const contentModel = mongoose.model("Content", contentSchema);
