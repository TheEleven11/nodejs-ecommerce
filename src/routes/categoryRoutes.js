import express from 'express';
import {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import { cleanCategoryObject } from '../middlewares/categoryMiddlewares.js';

const router = express.Router();

router.get('/', getAllCategories);

router.get('/:id', getCategory);

router.use(protect, restrictTo('admin'));

router.post('/', cleanCategoryObject, createCategory);

router.patch('/:id', cleanCategoryObject, updateCategory);

router.delete('/:id', deleteCategory);

export default router;
