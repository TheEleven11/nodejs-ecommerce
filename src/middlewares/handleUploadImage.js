import multer from 'multer';
import { mkdirSync } from 'fs';
import AppError from '../utils/appError.js';

const whitelist = ['image/png', 'image/jpeg', 'image/jpg'];

export const createUploadDir = (dirName) => {
  return (req, res, next) => {
    mkdirSync(`public/imgs/${dirName}`, {
      recursive: true,
    });
    next();
  };
};

export const getUploadMulter = (imgField, dirName, type) => {
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, `public/imgs/${dirName}/`);
    },
    filename: (req, file, callback) => {
      if (!whitelist.includes(file.mimetype)) {
        return callback(
          new AppError('This file is not allowed. Please provide images.', 403)
        );
      }

      let prefix = dirName.replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`
      );
      const path = `${prefix.slice(0, -1)}-${req.params.id}-${Date.now()}.jpeg`;

      if (type === 'single') {
        req.body[imgField] = path;
      } else {
        if (req.body[imgField] === undefined) req.body[imgField] = [];
        req.body[imgField].push(path);
      }

      callback(null, path);
    },
  });

  return multer({ storage });
};

export const handleUploadImage = (imgField, dirName) => {
  return [
    createUploadDir(dirName),
    getUploadMulter(imgField, dirName, 'single').single(imgField),
  ];
};

export const handleUploadMultiImages = (imgField, dirName) => {
  return [
    createUploadDir(dirName),
    getUploadMulter(imgField, dirName, 'array').array(imgField, 5),
  ];
};
