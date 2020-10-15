import express from "express";
import data from "./data";
import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import courseRoute from "./routes/courseRoute";
import bodyParser from "body-parser";

const port = 5000;
const app = express();

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
console.log(mongodbUrl);
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log("There is an error:", error));

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/courses", courseRoute);
app.get("/api/test/:id", (req, res) => {
  const courseID = req.params.id;
  const course = data.courses.find((x) => x._id === courseID);
  if (course) res.send(course);
  else res.status(404).send({ msg: "Product Not Found" });
});

app.get("/api/test", (req, res) => {
  res.send(data.courses);
});

app.listen(port, () => {
  console.log(`Server started listening at http://localhost:${port}`);
});
