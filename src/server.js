const express = require('express');
require('dotenv').config();
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes')
const connection = require('./config/database');
const port = process.env.HOST;
const app = express();
const mongoose = require('mongoose');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded());

app.use('/v1/api/users', userRouter);
app.use('/v1/api/products', productRouter);
app.use('/v1/api/orders', orderRouter);
// app.use('/api/auth', authRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

(async () => {
    await connection();

})();


// mongoose.connect('mongodb+srv://vanhoangk27:g470OvdpyqnaJMXo@cluster0.4whlb.mongodb.net/')
//     .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});