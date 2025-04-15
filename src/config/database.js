const mongoose = require('mongoose');
require('dotenv').config()
// mongoose.connect('mongodb+srv://vanhoangk27:g470OvdpyqnaJMXo@cluster0.4whlb.mongodb.net/')
//     .then(() => console.log('Connected!'));

const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected" },
    { value: 2, label: "connecting" },
    { value: 3, label: "disconnecting" }
]

const connection = async () => {
    try {
        const options = {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME,
        }
        await mongoose.connect(process.env.DB_HOST, options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db");

    } catch (error) {
        console.log('cannot connected', error)
    }
}

module.exports = connection 