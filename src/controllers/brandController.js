import {
  deleteOne,
  updateOne,
  getOne,
  getAll,
  createOne,
} from './handlerFactory.js';
import Brand from '../models/brandModel.js';

export const getAllBrands = getAll(Brand);

export const getBrand = getOne(Brand);

export const createBrand = createOne(Brand);

export const updateBrand = updateOne(Brand);

export const deleteBrand = deleteOne(Brand);
