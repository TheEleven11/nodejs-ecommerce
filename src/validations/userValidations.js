import { check } from 'express-validator';

import {
  checkEmail,
  checkName,
  checkPhone,
  checkPassword,
  checkConfirmPassword,
  checkOptionalEmail,
  checkOptionalName,
  checkOptionalPhone,
  checkOptionalGender,
  checkOptionalAddress,
  checkOptionalBirthday,
} from './userValidationFactory.js';

const checkOptionalRole = () =>
  check('role')
    .optional()
    .custom((value) => ['customer', 'admin'].includes(value))
    .withMessage('Role is invalid.');

const checkOptionalPassword = () =>
  check('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 chars long.');

export const validateCreatingNewUser = () => [
  checkEmail(),
  checkName(),
  checkPhone(),
  checkPassword(),
  checkConfirmPassword(),
  checkOptionalRole(),
];

export const validateUpdatingUser = () => [
  checkOptionalEmail(),
  checkOptionalName(),
  checkOptionalPhone(),
  checkOptionalGender(),
  checkOptionalAddress(),
  checkOptionalBirthday(),
  checkOptionalRole(),
  checkOptionalPassword(),
  checkConfirmPassword(),
];
