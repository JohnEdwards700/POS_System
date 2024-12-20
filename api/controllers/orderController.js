import asyncHandler from 'express-async-handler'
import { getAllOrders, createOrder, deleteOrder, updateOrder, getOrder } from '../models/services/pocketbaseService.js';

export const getAll = asyncHandler(async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500)
        //.json({ error: 'Failed to retrieve orders' });
        throw new Error(error.message);
   
    }
}
)
export const getbyId = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const order = await getOrder(id);
        res.json(order);
    } catch (error) {
        res.status(500)
        //.json({ error: 'Failed to retrieve order' });
        throw new Error(error.message);

    }
}
)
export const create = asyncHandler(async (req, res) => {
    try {
        const neworder = await createOrder(req.body);
        res.status(201).json(neworder)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to create order" });
        throw new Error(error.message);

    }
}
)
export const remove = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const deletedorder = await deleteOrder(id);
        res.status(201).json(deletedorder)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to delete order" })
        throw new Error(error.message);

    }
}
)
export const update = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const updatedorder = await updateOrder(id, req.body);
        res.status(201).json(updatedorder);
    }
    catch (error) {
        res.status(500)
        //.json({ error: 'failed to update order' });
        throw new Error(error.message);

    }
}
)