import {
  deleteOne,
  updateOne,
  getOne,
  getAll,
  createOne,
} from './handlerFactory.js';
import Product from '../models/productModel.js';

export const getAllProducts = getAll(Product);

export const getProduct = getOne(Product, [
  { path: 'category', select: 'name' },
  { path: 'brand', select: 'name' },
]);

export const createProduct = createOne(Product);

export const updateProduct = updateOne(Product);

export const deleteProduct = deleteOne(Product);
