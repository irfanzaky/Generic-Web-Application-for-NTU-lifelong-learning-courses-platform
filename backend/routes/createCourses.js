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
    const courseEE0002 = new Course({
      courseID: "EE0002",
      courseName: "Introduction to Food and Health",
      courseLecturer: "Yakoob Siyal",
      courseImage:
        "https://news.ntu.edu.sg/Documents/729_Image%202_NTU%20ADM%20art%20installation.jpg",
      courseCategory: "health",
      summary:
        "Explore innovative strategies to help promote healthy eating. This course covers food safety, food science, health informatics, and nutrition.  ",
      courseDescription:
        "Explore innovative strategies to help promote healthy eating. This course covers food safety, food science, health informatics, and nutrition.  ",
      announcement: [
        "This is Lorem Ipsum of first annoucement",
        "this is second announcement",
        "another annoucement",
      ],
    });
    const courseEE0003 = new Course({
      courseID: "EE0003",
      courseName: "Engineering Society",
      courseLecturer: "Joseph Sylvester",
      courseImage: "https://www.frontier-enterprise.com/wp-content/uploads/2019/05/pix_ntu.png",
      courseCategory: "EEE",
      summary:
        "From AY2019-2020 Semester 2 onward, Engineers & Society (E&S) was offered as a single course code (EG0001) under the charge of the School of CEE taught at College level. I am the Main Coordinator as well as the School Coordinator for CEE.",
      courseDescription:
        "From AY2019-2020 Semester 2 onward, Engineers & Society (E&S) was offered as a single course code (EG0001) under the charge of the School of CEE taught at College level. I am the Main Coordinator as well as the School Coordinator for CEE.",
      announcement: [
        "This is Lorem Ipsum of first annoucement",
        "this is second announcement",
        "another annoucement",
      ],
      assignment: ["assignement 1", "assignement 2"],
    });
    const courseEE0004 = new Course({
      courseID: "EE0004",
      courseName: "Marketing in a Digital World",
      courseLecturer: "Professor Aric Rindfleisch",
      courseImage:
        "https://lh3.googleusercontent.com/proxy/FNeqVjr2mKTjHjoLNs0zGLxj4kqXqheA7A5qIamLvV83MC66ADEe85A6cH0z_sH6rr7Mns5Q0Hrrr71QyNED1zuZmoJUt9nzQvCIGR941aVn09diyg",
      courseCategory: "productivity",
      summary:
        "Learn how digital tools, like the Internet, smartphones, and 3D printing, are changing the marketing industry and how brands can adapt. ",
      courseDescription:
        "Learn how digital tools, like the Internet, smartphones, and 3D printing, are changing the marketing industry and how brands can adapt. ",
      announcement: [
        "This is Lorem Ipsum of first annoucement",
        "this is second announcement",
        "another annoucement",
      ],
      assignment: ["assignement 1", "assignement 2"],
    });
    const courseEE0005 = new Course({
      courseID: "EE0005",
      courseName: "Successful Negotiation:  Essential Strategies and Skills",
      courseLecturer: "Dave Crenshaw",
      courseImage: "https://cdn.pixabay.com/photo/2020/09/04/12/32/kayak-5543935_960_720.jpg",
      courseCategory: "productivity",
      summary:
        "Strong negotiation skills can propel you in your career and personal life. Learn key communication tactics, how to prepare, and how to create a contract, so you can become a better negotiator.",
      courseDescription:
        "Strong negotiation skills can propel you in your career and personal life. Learn key communication tactics, how to prepare, and how to create a contract, so you can become a better negotiator.",
      announcement: [
        "This is Lorem Ipsum of first annoucement",
        "this is second announcement",
        "another annoucement",
      ],
      assignment: ["assignement 1", "assignement 2"],
    });
    const courseEE0006 = new Course({
      courseID: "EE0006",
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
    const newCourse2 = await courseEE0002.save();
    const newCourse3 = await courseEE0003.save();
    const newCourse4 = await courseEE0004.save();
    const newCourse5 = await courseEE0005.save();
    const newCourse6 = await courseEE0006.save();
    res.send(newCourse1);
  } catch (error) {
    res.send({ message: error.message });