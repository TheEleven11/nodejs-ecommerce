import express from 'express';
import userRouter from './userRoutes.js';
import authRouter from './authRoutes.js';
import meRouter from './meRoutes.js';
import productRouter from './productRoutes.js';

const api = express.Router();

api.use('/users', userRouter);

api.use('/auth', authRouter);

api.use('/me', meRouter);

api.use('/products', productRouter);

export default api;
