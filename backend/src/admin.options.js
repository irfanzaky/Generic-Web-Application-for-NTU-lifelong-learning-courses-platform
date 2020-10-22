import AdminBro from "admin-bro";
import AdminBroMongoose from "admin-bro-mongoose";
import Course from "../models/courseModel";
import Content from "../models/contentModel";
import User from "../models/userModel";

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
    resources: [User,Course,Content],
}

export default options;