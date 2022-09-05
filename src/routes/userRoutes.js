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
import { checkCurrentAdmin } from '../middlewares/userMiddleWares.js';
import {
  validateCreatingNewUser,
  validateUpdatingUser,
} from '../validations/userValidations.js';

const router = express.Router();

router.use(protect, restrictTo('admin'));

router
  .route('/')
  .get(getAllUsers)
  .post(validate(validateCreatingNewUser), createUser);

router.route('/:id').get(getUser);

router.patch(
  '/:id',
  checkCurrentAdmin,
  validate(validateUpdatingUser),
  handleUploadImage('avatar', 'users'),
  updateUser
);

router.delete('/:id', checkCurrentAdmin, deleteUser);

export default router;
