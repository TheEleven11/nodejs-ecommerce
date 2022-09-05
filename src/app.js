import express from 'express';
import api from './routes/api.js';
import globalErrorHandler from './controllers/errorController.js';
import AppError from './utils/appError.js';

const app = express();

app.use(express.json());

app.use('/api', api);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
