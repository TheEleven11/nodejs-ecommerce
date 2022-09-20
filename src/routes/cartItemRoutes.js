import express from 'express';
import {
  getAllCartItems,
  getCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
} from '../controllers/CartItemController.js';
import validate from '../middlewares/validate.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import {
  cleanCreatedCartItemObject,
  cleanUpdatedCartItemObject,
  getCustommerId,
} from '../middlewares/cartItemMiddlewares.js';
import {
  validateCreatingCartItem,
  validateUpdatingCartItem,
} from '../validations/cartItemValidations.js';
import { checkCustomerOwnCartItem } from '../middlewares/meMiddlewares.js';

const router = express.Router();

router.get('/', getAllCartItems);

router.get('/:id', getCartItem);

router.use(protect, restrictTo('customer'));

router.post(
  '/',
  cleanCreatedCartItemObject,
  validate(validateCreatingCartItem),
  getCustommerId,
  createCartItem
);

router.use(checkCustomerOwnCartItem);

router.patch(
  '/:id',
  cleanUpdatedCartItemObject,
  validate(validateUpdatingCartItem),
  updateCartItem
);

router.delete('/:id', deleteCartItem);

export default router;
