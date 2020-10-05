import { Router } from 'express';
import * as controllers from './controllers';

const router: Router = Router();

//TODO: create multiple users and record transactions
router.get('/tokens', controllers.getAllTokens);
router.get('/fields', controllers.getAllFields);
router.get('/userfieldtokens/:tokenIds', controllers.getUserFieldTokens);

export { router };
