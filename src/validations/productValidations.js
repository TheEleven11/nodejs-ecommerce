import { check } from 'express-validator';

const checkName = () =>
  check('name')
    .exists()
    .withMessage('Name is required.')
    .bail()
    .isLength({ min: 8 })
    .withMessage('Name must be at least 8 chars long.');

const checkDescription = () => {
  check('description')
    .exists()
    .withMessage('Description is required.')
    .bail()
    .isLength({ min: 8 })
    .withMessage('Description must be at least 8 chars long.');
};

const checkPrice = () => {
  check('price')
    .exists()
    .withMessage('Price is required.')
    .bail()
    .isNumeric()
    .withMessage('Price must be a number.');
};

const checkOptionalDetails = () => {
  check('details')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Details must be at least 8 chars long.');
};

const checkOptionalName = () =>
  check('name')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Name must be at least 8 chars long.');

const checkOptionalDescription = () => {
  check('description')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Description must be at least 8 chars long.');
};

const checkOptionalPrice = () => {
  check('price').optional().isNumeric().withMessage('Price must be a number.');
};

export const validateCreatingProduct = () => {
  checkName(), checkDescription(), checkOptionalDetails(), checkPrice();
};

export const validateUpdatingProduct = () => {
  checkOptionalName(),
    checkOptionalDescription(),
    checkOptionalDetails(),
    checkOptionalPrice();
};
