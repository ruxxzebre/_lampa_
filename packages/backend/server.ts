import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
// import multer from 'multer';
import helmet from 'helmet';
import dotenv from 'dotenv';
import ads from './routes/ads';

dotenv.config();
const app = express();
// const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(upload.array());
app.use(helmet());
app.use(ads);
// app.use(express.static());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
