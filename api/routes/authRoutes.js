import express from 'express';
import { postLogin, postLogout, getUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', postLogin); // POST a login

router.post('/logout', postLogout); // POST a logout

router.get('/me', getUser); // GET the current user

export default router;
