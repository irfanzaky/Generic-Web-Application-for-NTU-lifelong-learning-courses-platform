import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true, dropDups: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "student" },
  courses: { type: String },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
