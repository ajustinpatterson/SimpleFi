import db from '../models';

import path from 'path';
import { Request, Response, NextFunction } from 'express';

interface UserType {
  findOne: Function;
}

const checkDuplicateUsernameOrEmail = (
  req: Request,
  res: Response,
  next: NextFunction,
): any => {
  // Username
  db.findOne<UserType>({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: 'Failed! Username is already in use!',
      });
      return;
    }
    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: 'Failed! Email is already in use!',
        });
        return;
      }
      next();
    });
  });
};
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: 'Failed! Role does not exist = ' + req.body.roles[i],
        });
        return;
      }
    }
  }
  next();
};

export default verifySignup;
