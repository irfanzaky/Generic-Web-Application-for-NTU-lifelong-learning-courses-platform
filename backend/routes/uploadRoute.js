import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import config from '../config';
import { getToken, isAuth } from "../util";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

//creating upload route to local
const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});

//creating upload route to aws s3
aws.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: 'ap-southeast-1' 
});
const s3 = new aws.S3();
const storageS3 = multerS3({
  s3,
  bucket: 'ntulearn-files',
  acl: 'public-read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  key(req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploadS3 = multer({ storage: storageS3 });

router.post('/s3', uploadS3.single('file'), (req, res) => {
  res.send(req.file.location);
});

router.post('/s3-multiple', uploadS3.any('files[]'), (req, res) => {
  res.send(req.file.location);
});

export default router;
