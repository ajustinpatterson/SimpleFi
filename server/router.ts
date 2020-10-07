const {
  checkDuplicateUsernameOrEmail,
} = require('./middlewares/verify-signup');
const verifyToken = require('./middlewares/authJwt');
import { response, Router } from 'express';
import * as controllers from './controllers';

const router: Router = Router();

//TODO: create multiple users and record transactions
router.get('/tokens', verifyToken, controllers.getAllTokens);
router.get('/fields', verifyToken, controllers.getAllFields);
router.get('/userfieldtokens/:tokenIds', controllers.getUserFieldTokens);

router.post('/signup', checkDuplicateUsernameOrEmail, controllers.signup);
router.post('/login', controllers.signin);

export { router };
