import AdminBro from "admin-bro";
import AdminBroMongoose from "admin-bro-mongoose";
import Course from "../models/courseModel";
import Content from "../models/contentModel";
import User from "../models/userModel";

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
    resources: [User,Course,Content],
    branding: {
        companyName: 'NTUlifelonglearning',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg/165px-Nanyang_Technological_University_coat_of_arms_vector.svg.png',
        softwareBrothers:false,
        },
        
        
    
}

export default options;