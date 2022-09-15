import express from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import validate from '../middlewares/validate.js';
import { handleUploadMultiImages } from '../middlewares/handleUploadImage.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import {
  cleanCreatedProductObject,
  cleanUpdatedProductObject,
} from '../middlewares/productMiddlewares.js';
import {
  validateCreatingProduct,
  validateUpdatingProduct,
} from '../validations/productValidations.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.use(protect, restrictTo('admin'));

router.post(
  '/',
  cleanCreatedProductObject,
  validate(validateCreatingProduct),
  createProduct
);

router.patch(
  '/:id',
  cleanUpdatedProductObject,
  validate(validateUpdatingProduct),
  handleUploadMultiImages('images', 'products'),
  updateProduct
);

router.delete('/:id', deleteProduct);

export default router;
