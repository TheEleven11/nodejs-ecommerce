import { checkId, checkInt, checkOptionalInt } from './validationFactory.js';
import Product from '../models/productModel.js';

export const validateCreatingCartItem = () => [
  checkId('product', Product),
  checkInt('quantity'),
];

export const validateUpdatingCartItem = () => [checkOptionalInt('quantity')];
