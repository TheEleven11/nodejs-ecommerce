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
  checkOptionalRole,
  checkOptionalPassword,
} from './userValidationFactory.js';

export const validateCreatingUser = () => [
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
