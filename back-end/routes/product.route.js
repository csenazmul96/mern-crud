import express from 'express';
import {createProduct, deleteProduct, getProducts} from "../controller/ProductController.js";

const router = express.Router();

router.get('/', getProducts);

router.post('/', createProduct)

router.delete('/:id', deleteProduct)

router.get('/:id', deleteProduct)

export default router;

