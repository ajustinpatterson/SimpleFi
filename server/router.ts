export {};
import * as express from 'express';
const router = express();
const controllers = require('./controllers');

//TODO: create multiple users and record transactions
router.get('/tokens', controllers.getTokens);
router.get('/fields', controllers.getFields);
router.get('/userfieldtokens/:tokenIds', controllers.getUserFieldTokens);

module.exports = router;
