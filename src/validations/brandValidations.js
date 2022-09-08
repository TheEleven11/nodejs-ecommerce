import {
  checkString,
  checkUniqueString,
  checkOptionalString,
  checkOptionalUniqueString,
} from './validationFactory.js';
import Brand from '../models/brandModel.js';

export const validateCreatingBrand = () => [
  checkUniqueString('name', 2, Brand),
  checkString('description'),
];

export const validateUpdatingBrand = () => [
  checkOptionalUniqueString('name', 2, Brand),
  checkOptionalString('description'),
];
