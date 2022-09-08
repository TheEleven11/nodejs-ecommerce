import {
  checkString,
  checkNumber,
  checkOptionalNumber,
  checkOptionalString,
  checkId,
  checkOptionalId,
} from './validationFactory.js';
import Category from '../models/categoryModel.js';
import Brand from '../models/brandModel.js';

export const validateCreatingProduct = () => [
  checkString('name'),
  checkString('description'),
  checkId('brand', Brand),
  checkId('category', Category),
  checkNumber('price'),
];

export const validateUpdatingProduct = () => [
  checkOptionalString('name'),
  checkOptionalString('description'),
  checkOptionalId('brand', Brand),
  checkOptionalId('category', Category),
  checkOptionalString('details'),
  checkOptionalNumber('price'),
  checkOptionalNumber('discount'),
];
