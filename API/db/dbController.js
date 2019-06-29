const mongoose = require('mongoose');
const product = mongoose.model('Product');

module.exports = {
    // ~~ ~~ products ~~ ~~ 
    getProducts : async (req, res) =>{
        const products =  await product.find({});
        return res.json(products);
    },

    getAProduct : async (req, res) =>{
        const aProduct = await product.findById(req.params.id); 
        return res.json(aProduct);
    },

    saveProduct : async (req, res) =>{
        const newProduct = await product.create(req.body);
        return res.json(newProduct);
    },

    deleteProduct : async (req, res) =>{
        await product.findByIdAndDelete(req.params.id);
        return res.send();
    }
    // ~~ ~~ user ~~ ~~ 
}