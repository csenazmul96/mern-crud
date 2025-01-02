import express from 'express';
import Product from "../model/product.model.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({success: true, data: products})
    } catch (e) {
        res.status(500).json({success:false,  error: e.message});
    }
});

router.post('/', async (req, res) => {
    const body = req.body;
    if(!body.name || !body.price || !body.image) {
        return res.status(422).send({error: 'Please fill out all fields'});
    }
    const product = new Product(body);
    try {
        await product.save();
        res.status(200).send(product);
    } catch (error){
        res.status(400).send(error);
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await Product.deleteOne({_id: id});
        res.status(200).send({error: 'Product deleted successfully'});
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const product =  await Product.findById({_id: id});
        res.status(200).json({success: true, data: product});
    } catch (error) {
        res.status(500).send(error.message);
    }
})

export default router;

