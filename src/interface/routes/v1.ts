import { Router } from 'express';
import * as authController from '../controllers/authController';
import * as ticketsController from '../controllers/ticketsController';

const router = Router();

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.get('/tickets', ticketsController.listTickets);
router.post('/tickets', ticketsController.createTicket);

export default router;
