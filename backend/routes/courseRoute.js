import express from "express";
import Course from "../models/courseModel";
import Content from "../models/contentModel";
import { getToken, isAuth } from "../util";
import ExpressFormidable from "express-formidable";

const router = express.Router();

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
});

router.get("/get/:id", async (req, res) => {
  const course = await Course.findOne({ courseID: req.params.id });
  if (course) {
    res.send(course);
  } else {
    res.status(404).send({ message: "Course Not Found." });
  }
});

router.put("/desc/:id", async (req, res) => {
  console.log(req.body.desc)
  const course = await Course.findOneAndUpdate(
    { courseID: req.params.id }, //filter
    { courseDescription: req.body.desc}, //update
    { new: true});
  if (course) {
    console.log('succesfully update')
    res.status(200).send('Succesfully saved.');
  } else {
    res.status(500).send('error in updating course description');
  }
});

router.put("/ann/:id", async (req, res) => {
  console.log(req.body.ann)
  const course = await Course.findOneAndUpdate(
    { courseID: req.params.id }, //filter
    { announcement: req.body.ann}, //update
    { new: true});
  if (course) {
    console.log('succesfully update')
    res.status(200).send('Succesfully saved.');
  } else {
    res.status(500).send('error in updating course announcement');
  }
});

router.post("/assignment/:id", async (req, res) => {
  const {email, url, username} = req.body;
  console.log('assignement received',email, url);
  const course = await Course.findOne({ courseID: req.params.id });
  if (course) {
    const newAssignment = {email, url, username };
    course.assignment.push(newAssignment);
    const updatedAssignemnt = await course.save();
    if (updatedAssignemnt) {res.status(200).send({
      data:updatedAssignemnt,
      msg:'Succesfully saved.'})}
    else {res.status(500).send('error in updating course announcement')};
  } else {res.status(500).send('error in finding course announcement');
  }
});

router.get("/content/:id", async (req, res) => {
  const course = await Content.find({ courseID: req.params.id });
  if (course) {
    res.send(course);
  } else {
    res.status(404).send({ message: "Content Not Found." });
  }
});

router.get("/content/:id/:chapter", async (req, res) => {
  const course = await Content.find({ 
    courseID: req.params.id, 
    chapterNo: req.params.chapter});
  if (course) {
    res.send(course);
  } else {
    res.status(404).send({ message: "Content Not Found." });
  }
});

router.get("/createCourses", async (req, res) => {
  try {
    const courseEE0001 = new Course({
      courseID: "EE0001",
      courseName: "How To Slow Down and Be More Productive",
      courseLecturer: "Dave Crenshaw",
      courseImage: "https://media.timeout.com/images/105290175/750/422/image.jpg",
      courseCategory: "productivity",
      summary:
        "The pace of life is constantly increasing, yet rather than improving our productivity, this increased speed often creates stress and causes us to make mistakes. ",
      courseDescription:
        "The pace of life is constantly increasing, yet rather than improving our productivity, this increased speed often creates stress and causes us to make mistakes. ",
      announcement: [
        "This is Lorem Ipsum of first annoucement",
        "this is second announcement",
        "another annoucement",
      ],
      assignment: ["assignement 1", "assignement 2"],
    });

    const newCourse1 = await courseEE0001.save();

    res.send(newCourse1);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.get("/createContent", async (req, res) => {
  try {
    const contentChapter1 = new Content({
      courseID: "EE0001",
      chapterNo: 1,
      chapterTitle: "This is Chapter Title, Introduction",
      chapterSummary: "Brief description of session title with applicable real-world experiences, and can demonstrate why the iMBA from Illinois is crucial....  show more...",
      chapterDocument: ['a.pdf', 'b.pdf'],
      chapterQnA: [],
      lecture: [{
        title: "Introduction",
        video: "https://www.youtube.com/watch?v=okyT7KfnFrI",
        duration: 550},{
        title: "Mid1",
        video: "https://www.youtube.com/watch?v=bze6DJR6YwY",
        duration: 850},{
        title: "Mid2",
        video: "https://www.youtube.com/watch?v=76yRcaxtNN0",
        duration: 950},{
        title: "Conclusion",
        video: "https://www.youtube.com/watch?v=jX2MGS8c19E",
        duration: 1550}
    ],
    });

    const newContent = await contentChapter1.save();

    res.send(newContent);
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default router;
