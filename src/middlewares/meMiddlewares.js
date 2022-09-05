import cleanObject from '../utils/cleanObject.js';

export const getCurrentId = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

export const cleanUpdatedInfoObject = cleanObject('name', 'phone');

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
