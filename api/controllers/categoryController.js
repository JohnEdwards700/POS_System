import asyncHandler from 'express-async-handler'
import { getAllCategories, createCategory, deleteCategory, updateCategory, getCategory } from '../models/services/pocketbaseService.js';

export const getAll = asyncHandler(async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500)
        //.json({ error: 'Failed to retrieve Category' });
        throw new Error(error.message);

    }
}
)
export const getbyId = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const category = await getCategory(id);
        res.json(category);
    } catch (error) {
        res.status(500)
        //.json({ error: 'Failed to retrieve Category' });
        throw new Error(error.message);

    }
}
)
export const create = asyncHandler(async (req, res) => {
    try {
        const newCategory = await createCategory(req.body);
        res.status(201).json(newCategory)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to create Category" });
        throw new Error(error.message);

    }
}
)
export const remove = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const deletedCategory = await deleteCategory(id);
        res.status(201).json(deletedCategory)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to delete Category" })
        throw new Error(error.message);

    }
}
)
export const update = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const updatedCategory = await updateCategory(id, req.body);
        res.status(201).json(updatedCategory);
    }
    catch (error) {
        res.status(500)
        //.json({ error: 'failed to update Category' });
        throw new Error(error.message);

    }
}
)