import PocketBase from 'pocketbase';
import dotenv from 'dotenv';
dotenv.config();

const pb = new PocketBase(process.env.POCKETBASE_URL);




// Below is Models from the database in Correct Order, See authService.js for: Customer, Employee, users

//In Order the Database is
// 1. Category
// 2. Inventory
// 3. OrderItems
// 4. Orders
// 5. Payments
// 6. Products
// 7. Stores



//     /***Category From Database***/ // 


export const getAllCategories = async () => {
    try {
        const categories = await pb.collection('Category').getFullList()
        return categories;
    }
    catch (error) {
        console.error('error fetching Categories', error)
        throw error;
    }
};

//test to check if getAllCategories is functional
// const fetchCategories = async () => {
//     try {
//         const categories = await getAllCategories();
//         console.log(categories);
//     } catch (error) {
//         console.error('Error fetching Categories:', error);
//     }
// };
// fetchCategories();

export const getCategory = async (id) => {
    try {
        const category = await pb.collection('Category').getOne(id)
        return category;
    } catch (error) {
        console.error('error fetching category: ', error);
        throw error;
    }
};

export const createCategory = async (data) => {
    try {
        const newcategory = await pb.collection('Category').create(data);
        return newcategory;
    }
    catch (error) {
        console.error('error creating Categories: ', error);
        throw error;
    }
};

export const updateCategory = async (id,data) => {
    try {
        const updatedcategory = await pb.collection('Category').update(id, data);
        return updatedcategory;
    } catch (error) {
        console.error('error updating Categories: ', error);
        throw error;
    }
};

export const deleteCategory = async (id) => {
    try {
        await pb.collection('Category').delete(id)
        return { message: 'category deleted successfully' }
    }
    catch {
        console.error('error deleting this Category: ', error)
        throw error;
    }
};


//     /***End of Category***/ // 





//     /***Inventory From Database***/ // 


export const getAllInventory = async () => {
    try {
        const inventory = await pb.collection('Inventory').getFullList()
        return inventory;
    }
    catch (error) {
        console.error('error fetching Inventory', error)
        throw error;
    }
};

//test to check if getAllInventory() is functional
// const fetchInventory = async () => {
//     try {
//         const inventory = await getAllInventory();
//         console.log(inventory);
//     } catch (error) {
//         console.error('Error fetching Inventory:', error);
//     }
// };
// fetchInventory();

export const getInventory = async (id) => {
    try {
        const inventory = await pb.collection('Inventory').getOne(id)
        return inventory;
    } catch (error) {
        console.error('error fetching inventory: ', error);
        throw error;
    }
};

export const createInventory = async (data) => {
    try {
        const newinventory = await pb.collection('Inventory').create(data);
        return newinventory;
    }
    catch (error) {
        console.error('error creating Inventory: ', error);
        throw error;
    }
};

export const updateInventory = async (id,data) => {
    try {
        const updatedinventory = await pb.collection('Inventory').update(id, data);
        return updatedinventory;
    } catch (error) {
        console.error('error updating Inventory: ', error);
        throw error;
    }
};

export const deleteInventory = async (id) => {
    try {
        await pb.collection('Inventory').delete(id)
        return { message: 'Inventory deleted successfully' }
    }
    catch {
        console.error('error deleting this Inventory: ', error)
        throw error;
    }
};


//     /***End of Inventory***/ // 




//     /***OrderItems From Database***/ // 

export const getAllOrderItems = async () => {
    try {
        const orderitems = await pb.collection('OrderItems').getFullList()
        return orderitems;
    }
    catch (error) {
        console.error('error fetching Order Items', error)
        throw error;
    }
};

//test to check if getAllOrderItems() is functional
// const fetchOrderItems = async () => {
//     try {
//         const orderitems = await getAllOrderItems();
//         console.log(orderitems);
//     } catch (error) {
//         console.error('Error fetching Order Items:', error);
//     }
// };
// fetchOrderItems();

export const getOrderItem = async (id) => {
    try {
        const OrderItem = await pb.collection('OrderItems').getOne(id)
        return OrderItem;
    } catch (error) {
        console.error('error fetching OrderItem: ', error);
        throw error;
    }
};

export const createOrderItem = async (data) => {
    try {
        const neworderitem = await pb.collection('OrderItems').create(data);
        return neworderitem;
    }
    catch (error) {
        console.error('error creating Order Item: ', error);
        throw error;
    }
};

export const updateOrderItem = async (id,data) => {
    try {
        const updatedorderitem = await pb.collection('OrderItems').update(id, data);
        return updatedorderitem;
    } catch (error) {
        console.error('error updating Order Item: ', error);
        throw error;
    }
};

export const deleteOrderItem = async (id) => {
    try {
        await pb.collection('OrderItems').delete(id)
        return { message: 'Order Item deleted successfully' }
    }
    catch {
        console.error('error deleting this Order Item: ', error)
        throw error;
    }
};


//     /***End of OrderItems***/ // 






//     /***Orders From Database***/ // 

export const getAllOrders = async () => {
    try {
        const orders = await pb.collection('Orders').getFullList()
        return orders;
    } catch (error) {
        console.error('error fetching orders: ', error);
        throw error;
    }
};

//test to check getAllOrders() is functional
// const fetchOrders = async () => {
//     try {
//         const orders = await getAllOrders();
//         console.log(orders);
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//     }
// };
// fetchOrders();

//pass in id and return one product
export const getOrder = async (id) => {
    try {
        const order = await pb.collection('Orders').getOne(id)
        return order;
    } catch (error) {
        console.error('error fetching Order: ', error);
        throw error;
    }
};



export const createOrder = async (data) => {
    try {
        const newOrder = await pb.collection('Orders').create(data);
        return newOrder;
    }
    catch (error) {
        console.error('error creating Order: ', error);
        throw error;
    }
};

export const updateOrder = async (id,data) => {
    try {
        const updatedOrder= await pb.collection('Orders').update(id, data);
        return updatedOrder;
    } catch (error) {
        console.error('error updating Order: ', error);
        throw error;
    }
};

export const deleteOrder = async (id) => {
    try {
        await pb.collection('Orders').delete(id)
        return { message: 'Order deleted successfully' }
    }
    catch {
        console.error('error deleting this Order: ', error)
        throw error;
    }
}


//     /***End of OrderItems***/ // 







//     /***Payments From Database***/ // 


export const getAllPayments = async () => {
    try {
        const payments = await pb.collection('Payments').getFullList()
        return payments;
    }
    catch (error) {
        console.error('error fetching Payments', error)
        throw error;
    }
};

//test to check if getAllPayments() is functional
// const fetchPayment = async () => {
//     try {
//         const payment = await getAllPayments();
//         console.log(payment);
//     } catch (error) {
//         console.error('Error fetching Payment:', error);
//     }
// };
// fetchPayment();

export const getPayment = async (id) => {
    try {
        const payment = await pb.collection('Payments').getOne(id)
        return payment;
    } catch (error) {
        console.error('error fetching Payment: ', error);
        throw error;
    }
};

export const createPayment = async (data) => {
    try {
        const newpayment = await pb.collection('Payments').create(data);
        return newpayment;
    }
    catch (error) {
        console.error('error creating Payment: ', error);
        throw error;
    }
};

export const updatePayment = async (id,data) => {
    try {
        const updatedpayment = await pb.collection('Payments').update(id, data);
        return updatedpayment;
    } catch (error) {
        console.error('error updating Payment: ', error);
        throw error;
    }
};

export const deletePayment = async (id) => {
    try {
        await pb.collection('Payment').delete(id)
        return { message: 'Payment deleted successfully' }
    }
    catch {
        console.error('error deleting this Payment: ', error)
        throw error;
    }
};


//     /***End of Payments***/ // 







//     /***Products From Database***/ // 

export const getAllProducts = async () => {
    try {
        const products = await pb.collection('Products').getFullList()
        return products;
    } catch (error) {
        console.error('error fetching products: ', error);
        throw error;
    }
};

//test to check getAllProducts() is functional
// const fetchProducts = async () => {
//     try {
//         const products = await getAllProducts();
//         console.log(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// };
// fetchProducts();

//pass in id and return one product
export const getProduct = async (id) => {
    try {
        const product = await pb.collection('Products').getOne(id)
        return product;
    } catch (error) {
        console.error('error fetching products: ', error);
        throw error;
    }
};



export const createProduct = async (data) => {
    try {
        const newproduct = await pb.collection('Products').create(data);
        return newproduct;
    }
    catch (error) {
        console.error('error creating products: ', error);
        throw error;
    }
};

export const updateProduct = async (id, data) => {
    try {
        const updatedproduct = await pb.collection('Products').update(id, data);
        return updatedproduct;
    } catch (error) {
        console.error('error updating product: ', error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        await pb.collection('Products').delete(id)
        return { message: 'Product deleted successfully' }
    }
    catch {
        console.error('error deleting this product: ', error)
        throw error;
    }
}


//     /***End of Producsts***/ // 





//     /***Stores From Database***/ // 


export const getAllStores = async () => {
    try {
        const stores = await pb.collection('Stores').getFullList()
        return stores;
    } catch (error) {
        console.error('error fetching stores: ', error);
        throw error;
    }
};

//test to check getAllStores() is functional
// const fetchStores = async () => {
//     try {
//         const stores = await getAllStores();
//         console.log(stores);
//     } catch (error) {
//         console.error('Error fetching Stores:', error);
//     }
// };
// fetchStores();

//pass in id and return one product
export const getStore = async (id) => {
    try {
        const store = await pb.collection('Stores').getOne(id)
        return store;
    } catch (error) {
        console.error('error fetching Stores: ', error);
        throw error;
    }
};



export const createStore = async (data) => {
    try {
        const newstore = await pb.collection('Stores').create(data);
        return newstore;
    }
    catch (error) {
        console.error('error creating Stores: ', error);
        throw error;
    }
};

export const updateStore = async (id, data) => {
    try {
        const updatedstore = await pb.collection('Stores').update(id, data);
        return updatedstore;
    } catch (error) {
        console.error('error updating store: ', error);
        throw error;
    }
};

export const deleteStore = async (id) => {
    try {
        await pb.collection('Stores').delete(id)
        return { message: 'Store deleted successfully' }
    }
    catch {
        console.error('error deleting this Store: ', error)
        throw error;
    }
}


//     /***End of Stores***/ // 
