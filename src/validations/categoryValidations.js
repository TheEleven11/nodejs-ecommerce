import {
  checkString,
  checkUniqueString,
  checkOptionalString,
  checkOptionalUniqueString,
} from './validationFactory.js';
import Category from '../models/categoryModel.js';

export const validateCreatingCategory = () => [
  checkUniqueString('name', 4, Category),
  checkString('description'),
];

export const validateUpdatingCategory = () => [
  checkOptionalUniqueString('name', 4, Category),
  checkOptionalString('description'),
];
