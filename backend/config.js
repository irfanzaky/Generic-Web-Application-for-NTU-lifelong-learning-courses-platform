import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://irfanzakyharlen:monggodb@cluster0.xurhc.gcp.mongodb.net/ntulearn?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "NTUlearnIsAwesome!!!",
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
