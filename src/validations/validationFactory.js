import lodash from 'lodash';
import { check } from 'express-validator';

export const checkString = (field, minLength) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .isLength({ min: minLength })
    .withMessage(`${lodash.startCase(field)} must be at least 8 chars long.`);

export const checkOptionalString = (field, minLength) =>
  check(field)
    .optional()
    .isLength({ min: minLength })
    .withMessage(`${lodash.startCase(field)} must be at least 8 chars long.`);

export const checkUniqueString = (field, minLength, Model) =>
  checkString(field, minLength)
    .bail()
    .custom((value) =>
      Model.exists({ [field]: value }).then((doc) =>
        doc ? Promise.reject() : Promise.resolve()
      )
    )
    .withMessage(`${lodash.startCase(field)} already in use.`);

export const checkOptionalUniqueString = (field, minLength, Model) =>
  checkOptionalString(field, minLength)
    .bail()
    .custom((value) =>
      Model.exists({ [field]: value }).then((doc) =>
        doc ? Promise.reject() : Promise.resolve()
      )
    )
    .withMessage(
      `${lodash.startCase(
        field
      )} already in use. Please provide another or let this field empty.`
    );

export const checkDate = (field) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .isISO8601()
    .toDate()
    .withMessage(`${lodash.startCase(field)} is invalid.`);

export const checkOptionalDate = (field) =>
  check(field)
    .optional()
    .isISO8601()
    .toDate()
    .withMessage(`${lodash.startCase(field)} is invalid.`);

export const checkEnum = (field, array) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .custom((value) => array.includes(value))
    .withMessage(`${lodash.startCase(field)} is invalid.`);

export const checkOptionalEnum = (field, array) =>
  check(field)
    .optional()
    .custom((value) => array.includes(value))
    .withMessage(`${lodash.startCase(field)} is invalid.`);

export const checkId = (field, Model) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} ID is required.`)
    .bail()
    .isMongoId()
    .withMessage(`${lodash.startCase(field)} ID is invalid.`)
    .bail()
    .custom((value) =>
      Model.findById(value).then((doc) =>
        doc ? Promise.resolve() : Promise.reject()
      )
    )
    .withMessage(`No ${lodash.startCase(field)} found with this ID`);

export const checkOptionalId = (field, Model) =>
  check(field)
    .optional()
    .isMongoId()
    .withMessage(`${lodash.startCase(field)} Id is invalid.`)
    .bail()
    .custom((value) =>
      Model.findById(value).then((doc) =>
        doc ? Promise.resolve() : Promise.reject()
      )
    )
    .withMessage(`No ${lodash.startCase(field)} found with this ID`);

export const checkInt = (field) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .isInt({ min: 0 })
    .withMessage(`${lodash.startCase(field)} must be a integer.`);

export const checkOptionalInt = (field) =>
  check(field)
    .optional()
    .isInt({ min: 0 })
    .withMessage(`${lodash.startCase(field)} must be a integer.`);

export const checkNumber = (field) =>
  check(field)
    .exists()
    .withMessage(`${lodash.startCase(field)} is required.`)
    .bail()
    .isNumeric({ min: 0 })
    .withMessage(`${lodash.startCase(field)} must be a number.`);

export const checkOptionalNumber = (field) =>
  check(field)
    .optional()
    .isNumeric({ min: 0 })
    .withMessage(`${lodash.startCase(field)} must be a number.`);
