import express from 'express';
import { register_Action, login_Action } from '../controllers/auth.controller';
import { auth } from '../middlewares/auth.middleware';

const router = express.Router();
router.post('/createUser', register_Action);
router.post('/loginUser', login_Action);

// Commented:: Used for test
// router.get('/allUsers', auth, getAll_Action);
// router.get('/createDummy', registerDummy_Action);

export default router;