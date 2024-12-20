import asyncHandler from 'express-async-handler'
import { getAllPayments, createPayment, deletePayment, updatePayment, getPayment } from '../models/services/pocketbaseService.js';

export const getAll = asyncHandler(async (req, res) => {
    try {
        const payments = await getAllPayments();
        res.json(payments);
    } catch (error) {
        res.status(500)
        //.json({ error: 'Failed to retrieve payments' });
        throw new Error(error.message);

    }
}
)
export const getbyId = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const payment = await getPayment(id);
        res.json(payment);
    } catch (error) {
        res.status(500)
        //.json({ error: 'Failed to retrieve payment' });
        throw new Error(error.message);

    }
}
)
export const create = asyncHandler(async (req, res) => {
    try {
        const newpayment = await createPayment(req.body);
        res.status(201).json(newpayment)
    }
    catch (error) {
        res.status(500)//.json({ error: "failed to create payment" });
        throw new Error(error.message);

    }
}
)
export const remove = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const deletedpayment = await deletePayment(id);
        res.status(201).json(deletedpayment)
    }
    catch (error) {
        res.status(500)//.json({ error: "failed to delete payment" })
        throw new Error(error.message);

    }
}
)
export const update = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params
        const updatedpayment = await updatePayment(id, req.body);
        res.status(201).json(updatedpayment);
    }
    catch (error) {
        res.status(500)//.json({ error: 'failed to update payment' });
        throw new Error(error.message);

    }
}
)