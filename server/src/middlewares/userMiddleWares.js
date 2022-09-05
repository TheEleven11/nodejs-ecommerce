import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import cleanObject from '../utils/cleanObject.js';

export const checkCurrentAdmin = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError('No document found with that ID', 404));
  }
  if (user.id === req.user.id) {
    return next(
      new AppError("You can't do this action with your account", 403)
    );
  }
  next();
});

export const cleanUpdatedUserObject = cleanObject(
  'email',
  'name',
  'phone',
  'role',
  'password',
  'confirmPassword'
);

export const cleanCreatedNewUserObject = cleanObject(
  'email',
  'name',
  'phone',
  'role',
  'password',
  'confirmPassword'
);
