import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./routes/userRoute";
import courseRoute from "./routes/courseRoute";
import uploadRoute from "./routes/uploadRoute";
import bodyParser from "body-parser";

import AdminBro from "admin-bro";
import options from "./src/admin.options";
import buildAdminRouter from "./src/admin.router";

const port = 5000;
const app = express();

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
console.log('this is mongodbURL', mongodbUrl);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log("There is an error:", error));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
} )

app.use("/api/uploads", uploadRoute);
app.use("/api/users", userRoute);
app.use("/api/courses", courseRoute);
console.log(__dirname)

const admin = new AdminBro(options);
const router = buildAdminRouter(admin);
app.use(admin.options.rootPath, router)

app.listen(port, () => {
  console.log(config)
  console.log(`Server started listening at http://localhost:${port}`);
});
