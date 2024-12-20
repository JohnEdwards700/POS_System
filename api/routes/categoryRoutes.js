import express from 'express';
import { getAll, create, remove, update, getbyId } from '../controllers/categoryController.js';
const router = express.Router();

router.get('/', getAll); // GET all Categories

router.get('/:id', getbyId); // GET category by ID

router.post('/', create); // POST category

router.delete('/:id', remove); // DELETE category by ID

router.put('/:id', update); // PUT category by ID

export default router;