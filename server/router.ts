const checkDuplicateUsernameOrEmail = require('./middlewares/verify-signup');
const verifyToken = require('./middlewares/authJwt');
import { response, Router } from 'express';
import * as controllers from './controllers';

const router: Router = Router();

//TODO: create multiple users and record transactions
router.get('/tokens', controllers.getAllTokens);
router.get('/fields', controllers.getAllFields);
router.get('/userfieldtokens/:tokenIds', controllers.getUserFieldTokens);

router.post('/signup', controllers.signup);
router.post('/signin', controllers.signin);

export { router };
