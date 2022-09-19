import express from 'express';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import api from './routes/api.js';
import globalErrorHandler from './controllers/errorController.js';
import AppError from './utils/appError.js';

const app = express();

app.use(cors());

app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(`${__dirname}/../public`));

app.use('/api', api);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
