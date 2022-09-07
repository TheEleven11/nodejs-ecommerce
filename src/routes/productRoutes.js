import express from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.use(protect, restrictTo('admin'));

router.post('/', createProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
