import asyncHandler from 'express-async-handler'
import { login, logout, getCurrentUser } from '../models/services/authService.js';

export const postLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await login(email, password);
        res.json(user)
    }
    catch (error) {
        res.status(401)
        //.json({ error: 'login failed' });
        throw new Error(error.message);
    }
}
    
)
export const postLogout = asyncHandler((req, res) => {
    logout();
    res.json({ message: 'Logged out succesfully' });
}  
)
export const getUser = asyncHandler((req, res) => {
    const currentUser = getCurrentUser();
    res.json(currentUser)
}
)