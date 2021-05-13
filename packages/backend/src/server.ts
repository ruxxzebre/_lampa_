import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import expressPino from 'express-pino-logger';
import ads from './routes/ads';

dotenv.config();
if (!process.env.FRONTEND_DESTINATION && process.env.development) {
    throw new Error("Specify frontend build path.");
}
const app = express();

app.use(expressPino({
    prettyPrint: { colorize: true },
    serializers: {
        req: (req) => ({
            method: req.method,
            body: req.body
        }),
        res: (res) => ({
           status: res.statusCode
        }),
    }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(ads);
app.use(express.static(path.join(__dirname, process.env.FRONTEND_DESTINATION || './public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
