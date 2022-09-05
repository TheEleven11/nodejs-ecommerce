import { check } from 'express-validator';

export const checkEmail = () =>
  check('email')
    .exists()
    .withMessage('Email is required.')
    .bail()
    .isEmail()
    .withMessage('Email is invalid.')
    .bail();

export const checkName = () =>
  check('name')
    .exists()
    .withMessage('Name is required.')
    .bail()
    .isLength({ min: 8 })
    .withMessage('Name must be at least 8 chars long.');

export const checkPhone = () =>
  check('phone')
    .exists()
    .withMessage('Phone is required.')
    .bail()
    .isMobilePhone('vi-VN')
    .withMessage('Phone number is invalid.')
    .bail();

export const checkPassword = () =>
  check('password')
    .exists()
    .withMessage('Password is required.')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 chars long.');

export const checkConfirmPassword = () => async (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (password) {
    await check('confirmPassword')
      .exists()
      .withMessage('Confirm password is required.')
      .bail()
      .isLength({ min: 6 })
      .withMessage('Confirm password must be at least 6 chars long.')
      .bail()
      .custom((value) => password === confirmPassword)
      .withMessage('Passwords do not match.')
      .run(req);
  }
  return next();
};

export const checkOptionalEmail = () =>
  check('email').optional().isEmail().withMessage('Email is invalid.');

export const checkOptionalName = () =>
  check('name')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Name must be at least 8 chars long.');

export const checkOptionalPhone = () =>
  check('phone')
    .optional()
    .isMobilePhone('vi-VN')
    .withMessage('Phone number is invalid.');

export const checkOptionalAddress = () =>
  check('address')
    .optional()
    .custom((value) => {})
    .withMessage('Address is invalid.');

export const checkOptionalBirthday = () =>
  check('birthday')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('Birthday is invalid.');

export const checkOptionalGender = () =>
  check('gender')
    .optional()
    .custom((value) => ['male', 'female', 'other'].includes(value))
    .withMessage('Gender is invalid.');
