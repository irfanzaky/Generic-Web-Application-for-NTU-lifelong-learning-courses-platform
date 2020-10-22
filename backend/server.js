import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./routes/userRoute";
import courseRoute from "./routes/courseRoute";
import bodyParser from "body-parser";

import AdminBro from "admin-bro";
import options from "./src/admin.options";
import buildAdminRouter from "./src/admin.router";

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

const admin = new AdminBro(options);
const router = buildAdminRouter(admin);
app.use(admin.options.rootPath, router)

app.listen(port, () => {
  console.log(`Server started listening at http://localhost:${port}`);
});
