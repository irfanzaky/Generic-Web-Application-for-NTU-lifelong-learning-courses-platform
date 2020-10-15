import express from "express";
import Course from "../models/courseModel";
import { getToken, isAuth } from "../util";

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

export default router;
