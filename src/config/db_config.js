import mongoose from 'mongoose'
import {mongo_config} from './config.js'

export const connectDB = () => {
    mongoose.connect(mongo_config.DB_URI, {
    dbName: mongo_config.DB_NAME,
    autoCreate: true,
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.log("-------Database Connection Error------")
        console.log(error);
    })
}