import express from 'express';
import dotenv from 'dotenv';
import {connectionDB} from "./config/database.js";
import productRoute from "./routes/product.route.js";
const app = express();

dotenv.config();
app.use(express.json());

app.use('/api/products', productRoute)

app.listen(5000, ()=>{
    connectionDB()
    console.log("Server started on port: 5000...");
});
