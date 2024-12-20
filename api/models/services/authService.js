import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const login = async (email, password) => {
    try {
        const authData = await pb.collection('users').authWithPassword('admin@mail.com', 'Password1!');
        // const authData = await pb.collection('users').authWithPassword('email', 'password');
        // res.json({
        //     user:authData.record,
        //     token: pb.authStore.token
        // });
        return authData;
    }
    catch (error) {
        console.error('error with log in credentials', error);
        throw error;
    }
};

export const logout = () => {
    return pb.authStore.clear();
};

export const getCurrentUser = () => {
    return pb.authStore.model;
}