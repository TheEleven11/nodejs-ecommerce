import {
  deleteOne,
  updateOne,
  getOne,
  getAll,
  createOne,
} from './handlerFactory.js';
import Category from '../models/categoryModel.js';

export const getAllCategories = getAll(Category);

export const getCategory = getOne(Category);

export const createCategory = createOne(Category);

export const updateCategory = updateOne(Category);

export const deleteCategory = deleteOne(Category);
