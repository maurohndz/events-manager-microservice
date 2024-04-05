import { Router } from 'express';
import { URL_AUTH } from '@Url/auth.url';
import { URL_CUSTOMER } from '@Url/customer.url';
import AuthRoutes from './auth.routes';
import CustomerRoutes from './customer.routes';

// Init main routes
const router = Router();

router.use(URL_AUTH, AuthRoutes);
router.use(URL_CUSTOMER, CustomerRoutes);

export default router;
