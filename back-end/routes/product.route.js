import express from 'express';
import {createProduct, deleteProduct, getProducts, getSingleProducts} from "../controller/ProductController.js";

const router = express.Router();

router.get('/', getProducts);

router.post('/', createProduct)

router.delete('/:id', deleteProduct)

router.get('/:id', getSingleProducts)

export default router;

