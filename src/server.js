const express = require('express');
require('dotenv').config();
const routerAPI = require('./routes/api');
const connection = require('./config/database');
const port = process.env.HOST;
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded());

app.use('/v1/api', routerAPI);
// app.use('/api/auth', authRoutes);

(async () => {
    await connection();

})();


// mongoose.connect('mongodb+srv://vanhoangk27:g470OvdpyqnaJMXo@cluster0.4whlb.mongodb.net/')
//     .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});