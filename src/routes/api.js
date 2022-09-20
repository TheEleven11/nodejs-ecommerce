import express from 'express';
import userRouter from './userRoutes.js';
import authRouter from './authRoutes.js';
import meRouter from './meRoutes.js';
import productRouter from './productRoutes.js';
import categoryRouter from './categoryRoutes.js';
import brandRouter from './brandRoutes.js';
import cartItemRouter from './cartItemRoutes.js';

const api = express.Router();

api.use('/auth', authRouter);

api.use('/me', meRouter);

api.use('/users', userRouter);

api.use('/products', productRouter);

api.use('/brands', brandRouter);

api.use('/categories', categoryRouter);

api.use('/cart-items', cartItemRouter);

export default api;
