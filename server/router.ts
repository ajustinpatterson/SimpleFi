import { Router } from 'express';
import * as controllers from './controllers';

const router: Router = Router();

//TODO: create multiple users and record transactions
router.get('/tokens', controllers.getTokens);
router.get('/fields', controllers.getFields);
router.get('/userfieldtokens/:tokenIds', controllers.getUserFieldTokens);

export { router };
