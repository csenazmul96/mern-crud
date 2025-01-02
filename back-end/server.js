import express from 'express';
import dotenv from 'dotenv';
import {connectionDB} from "./config/database.js";
import productRoute from "./routes/product.route.js";
const app = express();

dotenv.config();
app.use(express.json());

app.use('/api/products', productRoute)

const port = process.env.SERVER_PORT || 3000;

app.listen(port || 5000, ()=>{
    connectionDB()
    console.log(`Server started on port: ${port}...`);
});
