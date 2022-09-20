import cleanObject from '../utils/cleanObject.js';
import catchAsync from '../utils/catchAsync.js';
import CartItem from '../models/cartItemModel.js';

export const getCurrentId = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

export const checkCustomerOwnCartItem = catchAsync(async (req, res, next) => {
  const cartItem = await CartItem.findById(req.params.id);
  if (!cartItem) {
    return next(new AppError('No Cart item found with that ID', 404));
  }

  if (cartItem.customer !== req.user.id) {
    return next(
      new AppError(
        "You do not have permission to perform this action because you don't own this Cart item.",
        403
      )
    );
  }
  return next();
});

export const cleanUpdatedInfoObject = cleanObject(
  'name',
  'phone',
  'birthday',
  'address',
  'gender'
);
