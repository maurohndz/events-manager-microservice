import { Container } from 'typedi';
import { Router } from 'express';
import { URL_REGISTER } from '@Url/customer.url';
import CustomerController from '@Controllers/customer.controller';

const router = Router();
const customerController = Container.get(CustomerController);

router.post(URL_REGISTER, customerController.register);

export default router;