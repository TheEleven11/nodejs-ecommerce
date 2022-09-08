import cleanObject from '../utils/cleanObject.js';

export const cleanCreatedProductObject = cleanObject(
  'name',
  'description',
  'brand',
  'category',
  'price'
);

export const cleanUpdatedProductObject = cleanObject(
  'name',
  'description',
  'brand',
  'category',
  'price',
  'discount',
  'details'
);
