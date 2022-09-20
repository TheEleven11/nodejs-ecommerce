import cleanObject from '../utils/cleanObject.js';

export const getCustommerId = (req, res, next) => {
  req.body.customer = req.user.id;
  next();
};

export const cleanCreatedCartItemObject = cleanObject('product', 'quantity');

export const cleanUpdatedCartItemObject = cleanObject('quantity');
