import { check } from 'express-validator';
import {
  checkPassword,
  checkConfirmPassword,
  checkOptionalEmail,
  checkOptionalName,
  checkOptionalPhone,
  checkOptionalAddress,
  checkOptionalGender,
  checkOptionalBirthday,
} from './userValidationFactory.js';

const checkCurrentPassword = () =>
  check('currentPassword')
    .exists()
    .withMessage('Current password is required.')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Current password must be at least 6 chars long.');

const checkDifferentPassword = () => async (req, res, next) => {
  const { password, currentPassword } = req.body;

  await checkPassword()
    .bail()
    .custom((value) => currentPassword !== password)
    .withMessage('New password must be different from current password.')
    .run(req);

  return next();
};

export const validateChangingPassword = () => [
  checkCurrentPassword(),
  checkDifferentPassword(),
  checkConfirmPassword(),
];

export const validateUpdatingInfo = () => [
  checkOptionalEmail(),
  checkOptionalName(),
  checkOptionalPhone(),
  checkOptionalGender(),
  checkOptionalAddress(),
  checkOptionalBirthday(),
];
