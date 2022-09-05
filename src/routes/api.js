import express from 'express';
import userRouter from './userRoutes.js';
import authRouter from './authRoutes.js';
import meRouter from './meRoutes.js';

const api = express.Router();

api.use('/users', userRouter);
api.use('/auth', authRouter);
api.use('/me', meRouter);

export default api;
