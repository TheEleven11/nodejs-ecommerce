import express from 'express';
import {
  getAllBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
} from '../controllers/brandController.js';
import validate from '../middlewares/validate.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import { cleanBrandObject } from '../middlewares/brandMiddlewares.js';
import {
  validateCreatingBrand,
  validateUpdatingBrand,
} from '../validations/brandValidations.js';

const router = express.Router();

router.get('/', getAllBrands);

router.get('/:id', getBrand);

router.use(protect, restrictTo('admin'));

router.post(
  '/',
  cleanBrandObject,
  validate(validateCreatingBrand),
  createBrand
);

router.patch(
  '/:id',
  cleanBrandObject,
  validate(validateUpdatingBrand),
  updateBrand
);

router.delete('/:id', deleteBrand);

export default router;
