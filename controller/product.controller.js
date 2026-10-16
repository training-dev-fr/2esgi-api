const Product = require('./../model/product.model.js');
const User = require('./../model/user.model.js')

exports.create = async (req, res) => {
    const product = await Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        UserId: req.payload.id
    });
    res.status(201).json(product);
}

exports.getAll = async (req, res) => {
    const listProduct = await Product.findAll({
        where: {
            UserId: req.payload.id
        }
    });
    res.status(200).json(listProduct);
}

exports.getById = async (req, res) => {
    const product = await Product.findOne({
        where: {
            id: req.params.id
        },
        include: [User]
    });
    res.status(200).json(product);
}

exports.update = async (req, res) => {
    const product = await Product.findOne({
        where: {
            id: req.params.id
        }
    });
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    await product.save();
    res.status(201).json(product);
}

exports.delete = async (req, res) => {
    let result = await Product.destroy({where: {
        id: req.params.id
    }});
    if(result !== 1){
        res.status(404).json("Product not found");
    }
    res.status(204).json();
}