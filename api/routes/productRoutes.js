import express from 'express';
import { getAll, create, remove, update, getbyId } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAll); // GET all products

router.get('/:id', getbyId); // GET product by ID

router.post('/', create); // POST a new Product

router.delete('/:id', remove); //DELETE a product by ID

router.put('/:id', update); //PUT a category by ID

export default router;