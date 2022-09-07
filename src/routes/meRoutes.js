import express from 'express';
import { protect } from '../middlewares/authMiddlewares.js';
import validate from '../middlewares/validate.js';
import {
  validateChangingPassword,
  validateUpdatingInfo,
} from '../validations/meValidations.js';
import { changePassword } from '../controllers/meController.js';
import { getUser, updateUser } from '../controllers/userController.js';
import {
  cleanUpdatedInfoObject,
  getCurrentId,
} from '../middlewares/meMiddlewares.js';
import { handleUploadMultiImages } from '../middlewares/handleUploadImage.js';

const router = express.Router();

router.use(protect);

router.get('/info', getCurrentId, getUser);

router.post(
  '/info',
  getCurrentId,
  cleanUpdatedInfoObject,
  validate(validateUpdatingInfo),
  handleUploadMultiImages('imgs', 'users'),
  updateUser
);

router.post(
  '/changePassword',
  validate(validateChangingPassword),
  changePassword
);

export default router;
