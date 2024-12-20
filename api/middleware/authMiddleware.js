
export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader){
        return res.status(401).json({message: 'no token provided'});
    }
    try{
        await pb.authStore.loadFromCooke(authHeader);

        if (!pb.authStore.isValid){
            return res.status(401).json({message: 'Invalid or expired token'});
        }

        req.user = pb.authStore.model;
        next()

    }
    catch(error){
        res.status(401).json({
            message: 'Authentication failed',
            error: error.message
        });
    }
};