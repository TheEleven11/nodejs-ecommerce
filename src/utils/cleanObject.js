import lodash from 'lodash';

const cleanObject = (...correctProperties) => {
  return (req, res, next) => {
    req.body = lodash.pick(req.body, correctProperties);

    Object.keys(req.body).forEach((key) => {
      if (
        req.body[key] === null ||
        req.body[key] === undefined ||
        req.body[key] === ''
      ) {
        delete req.body[key];
      }
    });

    return next();
  };
};

export default cleanObject;
