import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import inventoryRoutes from './routes/inventoryRoutes.js';
import orderItemsRoutes from './routes/orderItemsRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import storeRoutes from './routes/storeRoutes.js'
import { errorMiddleware } from './middleware/errorMiddleware.js'
import cors from 'cors';
import.meta.dirname;
import.meta.filename;

dotenv.config();

const app = express();

const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200
}

//middleware
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/test', (req, res) => {
    console.log(req.body);
    res.send('JSON received');
})
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/items', orderItemsRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/store', storeRoutes);


app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

//Temporary Login page below, Above is main Method
// app.get('/login', (req, res) => {
//     res.sendFile('./views/login.html', { root: __dirname });
// });
//middleware
// app.use((req, res) => {
//     res.send('<h1>Error 404</h1>')
// })

app.use(errorMiddleware)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});