import express from 'express';
import { getAll, create, remove, update, getbyId } from '../controllers/paymentController.js';
const router = express.Router();

router.get('/', getAll); // GET all payment

router.get('/:id', getbyId); // GET payment by ID

router.post('/', create); // POST a new payment

router.delete('/:id', remove); //DELETE a payment by ID

router.put('/:id', update); //PUT a payment by ID

export default router;