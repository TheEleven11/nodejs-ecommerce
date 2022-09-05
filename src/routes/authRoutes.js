import express from 'express';
import {
  signup,
  login,
  forgotPassword,
  resetPassword,
} from '../controllers/authController.js';
import validate from '../middlewares/validate.js';
import { cleanSignedUpObject } from '../middlewares/authMiddlewares.js';
import {
  validateForgettingPassword,
  validateSigningUp,
  validateLoggingIn,
  validateResettingPassword,
} from '../validations/authValidations.js';

const router = express.Router();

router.post(
  '/signup',
  cleanSignedUpObject,
  validate(validateSigningUp),
  signup
);

router.post('/login', validate(validateLoggingIn), login);

router.post(
  '/forgotPassword',
  validate(validateForgettingPassword),
  forgotPassword
);

router.post(
  '/resetPassword/:token',
  validate(validateResettingPassword),
  resetPassword
);

export default router;
