import Product from "../model/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({success: true, data: products})
    } catch (e) {
        res.status(500).json({success:false,  error: e.message});
    }
}
export const getSingleProducts = async (req, res) => {
    try {
        const products = await Product.findById( req.params.id)
        res.status(200).json({success: true, data: products})
    } catch (e) {
        res.status(500).json({success:false,  error: e.message});
    }
}

export const createProduct = async (req, res) => {
    const body = req.body;
    if(!body.name || !body.price || !body.image) {
        return res.status(422).send({error: 'Please fill out all fields'});
    }
    const product = new Product(body);
    try {
        await product.save();
        res.status(200).json({success: true, data: product});
    } catch (error){
        res.status(500).json({success: false, error: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false, message: 'Invalid ID'});
    }
    try {
        await Product.deleteOne({_id: id});
        res.status(200).json({success: true, message: 'Product deleted successfully'});
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
}

