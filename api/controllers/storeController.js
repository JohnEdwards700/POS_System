import asyncHandler from 'express-async-handler'
import { getAllStores, createStore, deleteStore, updateStore, getStore } from '../models/services/pocketbaseService.js';

export const getAll = asyncHandler(async (req, res) => {
    try {
        const stores = await getAllStores();
        res.json(stores);
    } catch (error) {
        res.status(500)//.json({ error: 'Failed to retrieve stores' });
        throw new Error(error.message);

    }
}
)
export const getbyId = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const store = await getStore(id);
        res.json(store);
    } catch (error) {
        res.status(500)//.json({ error: 'Failed to retrieve store' });
        throw new Error(error.message);

    }
}
)
export const create = asyncHandler(async (req, res) => {
    try {
        const newstore = await createStore(req.body);
        res.status(201).json(newstore)
    }
    catch (error) {
        res.status(500)//.json({ error: "failed to create store" });
        throw new Error(error.message);

    }
}
)
export const remove = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const deletedstore = await deleteStore(id);
        res.status(201).json(deletedstore)
    }
    catch (error) {
        res.status(500)//.json({ error: "failed to delete store" })
        throw new Error(error.message);

    }
}
)
export const update = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const updatedstore = await updateStore(id , req.body);
        res.status(201).json(updatedstore);
    }
    catch (error) {
        res.status(500)//.json({ error: 'failed to update store' });
        throw new Error(error.message);

    }
}
)