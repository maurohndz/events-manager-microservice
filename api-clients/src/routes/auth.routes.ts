import { Container } from 'typedi';
import { Router } from 'express';
import { URL_LOGIN } from '@Url/auth.url';
import AuthController from '@Controllers/auth.controller';

const router = Router();
const authController = Container.get(AuthController);

router.post(URL_LOGIN, authController.login);

export default router;