import {
  checkName,
  checkPassword,
  checkConfirmPassword,
  checkEmail,
  checkPhone,
} from './userValidationFactory.js';
import User from '../models/userModel.js';

const checkEmailUnique = () =>
  checkEmail()
    .bail()
    .custom((value) =>
      User.exists({ email: value }).then((user) =>
        user ? Promise.reject() : Promise.resolve()
      )
    )
    .withMessage('Email already in use.');

const checkPhoneUnique = () =>
  checkPhone()
    .bail()
    .custom((value) =>
      User.exists({ phone: value }).then((user) =>
        user ? Promise.reject() : Promise.resolve()
      )
    )
    .withMessage('Phone already in use.');

export const validateSigningUp = () => [
  checkEmailUnique(),
  checkName(),
  checkPhoneUnique(),
  checkPassword(),
  checkConfirmPassword(),
];

export const validateLoggingIn = () => [checkEmail(), checkPassword()];

export const validateForgettingPassword = () => checkEmail();

export const validateResettingPassword = () => [
  checkPassword(),
  checkConfirmPassword(),
];
