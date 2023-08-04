import express, { Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import multer from 'multer';
import router from "./src/routes/index.routes";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 6000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is actually online at http://localhost:${port}`);
});