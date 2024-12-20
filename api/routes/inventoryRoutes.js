import express from 'express';
import { getAll, create, remove, update, getbyId } from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', getAll); // GET all Inventory

router.get('/:id', getbyId); // Get Inventory by ID

router.post('/', create); // POST Inventory

router.delete('/:id', remove); // DELETE inventory by ID

router.put('/:id', update); //PUT inventory by ID

export default router;