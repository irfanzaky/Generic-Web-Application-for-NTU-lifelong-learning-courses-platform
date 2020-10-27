router.get("/createCourses", async (req, res) => {
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
        video: "https://www.youtube.com/watch?v=okyT7KfnFrI",
        duration: 850},{
        title: "Mid2",
        video: "https://www.youtube.com/watch?v=okyT7KfnFrI",
        duration: 950},{
        title: "Conclusion",
        video: "https://www.youtube.com/watch?v=okyT7KfnFrI",
        duration: 1550}
    ],
    })

    const newCourse1 = await courseEE0001.save();

    res.send(newCourse1);
  } catch (error) {
    res.send({ message: error.message })}})