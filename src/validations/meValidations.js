import {
  checkDifferentPassword,
  checkCurrentPassword,
  checkConfirmPassword,
  checkOptionalEmail,
  checkOptionalName,
  checkOptionalPhone,
  checkOptionalAddress,
  checkOptionalGender,
  checkOptionalBirthday,
} from './userValidationFactory.js';

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
