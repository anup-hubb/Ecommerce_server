import 'dotenv/config'
import express from "express";
import {connectDB} from './config/db_config.js'

const PORT = process.env.PORT || 8080;
const app = express();
connectDB();

app.get('/', (req,res) => {
    res.status(200).json({
        message:'server is up & running',
        status:'sucess',
    })
})

app.listen(PORT, ()=> {
    console.log("Server started on port: ", PORT);
});