import express from "express";


const PORT = 8080;
const app = express();

app.get('/', (req,res) => {
    res.status(200).json({
        message:'server is up & running',
        status:'sucess',
    })
})

app.listen(PORT, ()=> {
    console.log("Server started on port: ", PORT);
});