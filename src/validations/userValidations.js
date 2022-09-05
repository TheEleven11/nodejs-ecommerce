import { check } from 'express-validator';

import {
  checkConfirmPassword,
  checkOptionalEmail,
  checkOptionalName,
  checkOptionalPhone,
} from './userValidationFactory.js';
import { validateSigningUp } from './authValidations.js';

const checkRole = () =>
  check('role')
    .optional()
    .custom((value) => ['customer', 'admin'].includes(value))
    .withMessage('Role is invalid.');

export const validateCreatingNewUser = () => [validateSigningUp(), checkRole()];

export const validateUpdatingUser = () => [
  checkOptionalEmail(),
  checkOptionalName(),
  checkOptionalPhone(),
  checkRole(),

  check('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 chars long.'),

  checkConfirmPassword(),
];
