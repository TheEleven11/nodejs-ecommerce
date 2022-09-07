import express from 'express';
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import validate from '../middlewares/validate.js';
import { handleUploadImage } from '../middlewares/handleUploadImage.js';
import { protect, restrictTo } from '../middlewares/authMiddlewares.js';
import {
  checkCurrentAdmin,
  cleanCreatedUserObject,
  cleanUpdatedUserObject,
} from '../middlewares/userMiddleWares.js';
import {
  validateCreatingUser,
  validateUpdatingUser,
} from '../validations/userValidations.js';

const router = express.Router();

router.use(protect, restrictTo('admin'));

router.get('/', getAllUsers);

router.post(
  '/',
  cleanCreatedUserObject,
  validate(validateCreatingUser),
  createUser
);

router.get('/:id', getUser);

router.patch(
  '/:id',
  checkCurrentAdmin,
  cleanUpdatedUserObject,
  validate(validateUpdatingUser),
  handleUploadImage('avatar', 'users'),
  updateUser
);

router.delete('/:id', checkCurrentAdmin, deleteUser);

export default router;
