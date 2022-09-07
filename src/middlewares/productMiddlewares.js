import cleanObject from '../utils/cleanObject.js';

export const cleanCreatedProductObject = () =>
  cleanObject('name', 'description', 'price');
