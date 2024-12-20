import express from 'express';
import { getAll, create, remove, update, getbyId } from '../controllers/orderitemsController.js';

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getbyId);

router.post('/', create);

router.delete('/:id', remove);

router.put('/:id', update);

export default router;