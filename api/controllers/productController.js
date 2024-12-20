import asyncHandler from 'express-async-handler'
import { getAllProducts, createProduct, deleteProduct, updateProduct, getProduct } from '../models/services/pocketbaseService.js';

export const getAll = asyncHandler(async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500)//.json({ error: 'Failed to retrieve products' });
        throw new Error(error.message);

    }
}
)
export const getbyId = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const product = await getProduct(id);
        res.json(product);
    } catch (error) {
        res.status(500)//.json({ error: 'Failed to retrieve product' });
        throw new Error(error.message);

    }
}
)
export const create = asyncHandler(async (req, res) => {
    try {
        const newproduct = await createProduct(req.body);
        res.status(201).json(newproduct)
    }
    catch (error) {
        res.status(500)//.json({ error: "failed to create product" });
        throw new Error(error.message);

    }
}
)
export const remove = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const deletedproduct = await deleteProduct(id);
        res.status(201).json(deletedproduct)
    }
    catch (error) {
        res.status(500)//.json({ error: "failed to delete product" })
        throw new Error(error.message);

    }
}
)
export const update = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const updatedproduct = await updateProduct(id, req.body);
        res.status(201).json(updatedproduct);
    }
    catch (error) {
        res.status(500)//.json({ error: 'failed to update product' });
        throw new Error(error.message);

    }
}
)