import express from 'express';
import { getAll, create, remove, update, getbyId } from '../controllers/storeController.js';

const router = express.Router();


router.get('/', getAll); // GET all stores

router.get('/:id', getbyId); // GET store by ID

router.post('/', create); // POST a new store

router.delete('/:id', remove); //DELETE a store by ID

router.put('/:id', update); //PUT a store by ID

export default router;