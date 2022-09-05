import {
  checkName,
  checkPassword,
  checkConfirmPassword,
  checkEmail,
  checkPhone,
} from './userValidationFactory.js';

export const validateSigningUp = () => [
  checkEmail(),
  checkName(),
  checkPhone(),
  checkPassword(),
  checkConfirmPassword(),
];

export const validateLoggingIn = () => [checkEmail(), checkPassword()];

export const validateForgettingPassword = () => checkEmail();

export const validateResettingPassword = () => [
  checkPassword(),
  checkConfirmPassword(),
];
