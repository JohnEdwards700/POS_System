import express from 'express';
import { getAll, create, remove, update, getbyId } from '../controllers/orderController.js';

const router = express.Router();

router.get('/', getAll); // GET all Orders

router.get('/:id', getbyId); // Get order by ID

router.post('/', create); // POST order

router.delete('/:id', remove); // DELETE order by ID

router.put('/:id', update); //PUT order by ID

export default router;