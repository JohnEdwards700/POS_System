import asyncHandler from 'express-async-handler'
import { getAllInventory, createInventory, deleteInventory, updateInventory, getInventory } from '../models/services/pocketbaseService.js';

export const getAll = asyncHandler(async (req, res) => {
    try {
        const inventory = await getAllInventory();
        res.json(inventory);
    } catch (error) {
        res.status(500)
        //.json({ error: 'Failed to retrieve Inventory' });
        throw new Error(error.message);

    }
}
)
export const getbyId = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const inventory = await getInventory(id);
        res.status(201).json(inventory)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to retrieve Inventory" })
        throw new Error(error.message);
    }
})

export const create = asyncHandler(async (req, res) => {
    try {
        const newinventory = await createInventory(req.body);
        res.status(201).json(newinventory)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to create Inventory" });
        throw new Error(error.message);

    }
}
)
export const remove = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const deletedInventory = await deleteInventory(id);
        res.status(201).json(deletedInventory)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to delete Inventory" })
        throw new Error(error.message);

    }
}
)
export const update = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const updatedInventory = await updateInventory(id, req.body);
        res.status(201).json(updatedInventory);
    }
    catch (error) {
        res.status(500)
        //.json({ error: 'failed to update Inventory' });
        throw new Error(error.message);

    }
}
)