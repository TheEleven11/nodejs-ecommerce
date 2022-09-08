import { check } from 'express-validator';
import User from '../models/userModel.js';
import { checkString, checkEnum } from './validationFactory.js';

const roles = ['student', 'teacher'];

const checkEmail = () =>
  check('email')
    .exists()
    .withMessage('Email is required.')
    .bail()
    .isEmail()
    .withMessage('Email is invalid.');

const checkUniqueEmail = () =>
  check('email')
    .exists()
    .withMessage('Email is required.')
    .bail()
    .isEmail()
    .withMessage('Email is invalid.')
    .bail()
    .custom((value) =>
      User.exists({ email: value }).then((user) =>
        user ? Promise.reject() : Promise.resolve()
      )
    )
    .withMessage('Email already in use.');

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

export const validateSigningUp = () => [
  checkUniqueEmail(),
  checkString('name', 8),
  checkString('password', 6),
  checkConfirmPassword(),
];

export const validateLoggingIn = () => [
  checkEmail(),
  checkString('password', 6),
];

export const validateForgettingPassword = () => checkEmail();

export const validateResettingPassword = () => [
  checkString('password', 6),
  checkConfirmPassword(),
];
