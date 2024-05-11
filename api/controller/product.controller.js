const productModel = require('../models/product.model')

// seller
const newProductController = async (req, res) => {
    try {
        const product = new productModel({
            ...req.body
        })
    
        await product.save();

        return res.status(200).json("Product added successfully")
    } catch (err) {
        return res.status(500).json("Failed to upload")
    }
} 

const getSellerProductsController = async (req, res) => {
    const sellerProducts = await productModel.find({ sellerID: req.params.id })

    return res.status(200).json(sellerProducts)
}

// public
const getAllProductsController = async (req, res) => {
    const allProducts = await productModel.find()
    
    return res.status(200).json(allProducts)
}


module.exports = { newProductController, getAllProductsController, getSellerProductsController }