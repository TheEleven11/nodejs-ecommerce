import express from 'express';
import userRouter from './userRoutes.js';
import authRouter from './authRoutes.js';
import meRouter from './meRoutes.js';
import productRouter from './productRoutes.js';
import categoryRouter from './categoryRoutes.js';
import brandRouter from './brandRoutes.js';

const api = express.Router();

api.use('/users', userRouter);

api.use('/auth', authRouter);

api.use('/me', meRouter);

api.use('/products', productRouter);

api.use('/brands', brandRouter);

api.use('/categories', categoryRouter);

export default api;
