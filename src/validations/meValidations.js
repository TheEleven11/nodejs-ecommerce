import { check } from 'express-validator';
import {
  checkPassword,
  checkConfirmPassword,
  checkOptionalEmail,
  checkOptionalName,
  checkOptionalPhone,
} from './userValidationFactory.js';

export const validateChangingPassword = () => [
  check('currentPassword')
    .exists()
    .withMessage('Current password is required.')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Current password must be at least 6 chars long.'),

  async (req, res, next) => {
    const { password, currentPassword } = req.body;

    await checkPassword()
      .bail()
      .custom((value) => currentPassword !== password)
      .withMessage('New password must be different from current password.')
      .run(req);

    return next();
  },

  checkConfirmPassword(),
];

export const validateUpdatingInfo = () => [
  checkOptionalEmail(),
  checkOptionalName(),
  checkOptionalPhone(),
];
