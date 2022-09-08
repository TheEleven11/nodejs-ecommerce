import { check } from 'express-validator';
import User from '../models/userModel.js';
import {
  checkOptionalString,
  checkString,
  checkOptionalDate,
  checkOptionalEnum,
} from './validationFactory.js';

const roles = ['customer', 'admin'];
const genders = ['male', 'female', 'other'];

const checkUniqueEmail = () =>
  check('email')
    .exists()
    .withMessage('Email is required.')
    .bail()
    .isEmail()
    .withMessage('Email is invalid.')
    .bail()
    .custom((value) => {
      User.exists({ email: value }).then((user) =>
        user ? Promise.reject() : Promise.resolve()
      );
    })
    .withMessage('Email already in use.');

const checkOptionalEmail = () =>
  check('email')
    .optional()
    .isEmail()
    .withMessage('Email is invalid.')
    .custom((value) => {
      User.exists({ email: value }).then((user) =>
        user ? Promise.reject() : Promise.resolve()
      );
    })
    .withMessage(
      'Email already in use. Please provide another or let this field empty.'
    );

const checkOptionalPhone = () =>
  check('phone')
    .optional()
    .isMobilePhone('vi-VN')
    .withMessage('Phone number is invalid.')
    .bail()
    .custom((value) => {
      User.exists({ phone: value }).then((user) =>
        user ? Promise.reject() : Promise.resolve()
      );
    })
    .withMessage(
      'Phone number already in use. Please provide another or let this field empty.'
    );

const checkOptionalAddress = () =>
  check('address')
    .optional()
    .custom((value) => {
      return value.province && value.district && value.ward && value.detail;
    })
    .withMessage('Address is invalid.');

const checkConfirmPassword = () => async (req, res, next) => {
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

export const validateCreatingUser = () => [
  checkUniqueEmail(),
  checkString('name'),
  checkOptionalEnum('role', roles),
  checkString('password', 6),
  checkConfirmPassword(),
];

export const validateUpdatingUser = () => [
  checkOptionalEmail(),
  checkOptionalString('name'),
  checkOptionalPhone(),
  checkOptionalAddress(),
  checkOptionalDate('birthday'),
  checkOptionalEnum('gender', genders),
  checkOptionalEnum('role', roles),
  checkOptionalString('password', 6),
  checkConfirmPassword(),
];
