import asyncHandler from 'express-async-handler'
import { getAllOrderItems, createOrderItem, deleteOrderItem, updateOrderItem, getOrderItem } from '../models/services/pocketbaseService.js';

export const getAll = asyncHandler(async (req, res) => {
    try {
        const orderitems = await getAllOrderItems();
        res.json(orderitems);
    } catch (error) {
        res.status(500)
        //.json({ error: 'Failed to retrieve OrderItem' });
        throw new Error(error.message);

    }
}
)
export const getbyId = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const OrderItem = await getOrderItem(id);
        res.status(201).json(OrderItem)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to retrieve OrderItem" })
        throw new Error(error.message);

    }
}
)
export const create = asyncHandler(async (req, res) => {
    try {
        const newOrderItem = await createOrderItem(req.body);
        res.status(201).json(newOrderItem)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to create OrderItem" });
        throw new Error(error.message);

    }
}
)
export const remove = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const deletedOrderItem = await deleteOrderItem(id);
        res.status(201).json(deletedOrderItem)
    }
    catch (error) {
        res.status(500)
        //.json({ error: "failed to delete OrderItem" })
        throw new Error(error.message);

    }
}
)
export const update = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const updatedOrderItem = await updateOrderItem(id, req.body);
        res.status(201).json(updatedOrderItem);
    }
    catch (error) {
        res.status(500)
        //.json({ error: 'failed to update OrderItem' });
        throw new Error(error.message);

    }
}
)