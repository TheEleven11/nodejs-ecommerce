import {
  deleteOne,
  updateOne,
  getOne,
  getAll,
  createOne,
} from './handlerFactory.js';
import CartItem from '../models/cartItemModel.js';

export const getAllCartItems = getAll(CartItem);

export const getCartItem = getOne(CartItem);

export const createCartItem = createOne(CartItem);

export const updateCartItem = updateOne(CartItem);

export const deleteCartItem = deleteOne(CartItem);
