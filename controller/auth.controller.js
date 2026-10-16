const  argon2 = require('argon2');
const User = require('./../model/user.model.js');
const Role = require('./../model/role.model.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    let user = await User.findOne({
        where : {
            email: req.body.email
        },
        include: [Role]
    });
    if(!user){
        return res.status(400).json("Login or password incorrect");
    }
    const valid = await argon2.verify(user.password, req.body.password);
    if(!valid){
        return res.status(400).json("Login or password incorrect");
    }
    const token = jwt.sign({
        id: user.id,
        role: user.Roles
    },process.env.JWT_KEY);
    return res.status(200).json(token);
}

exports.signin = async (req, res) => {
    let user = await User.findOne({
        where : {
            email: req.body.email
        }
    });
    if(user){
        return res.status(400).json("User already exists");
    }
    const hash = await argon2.hash(req.body.password,{
        type: argon2.argon2id,
        memoryCost: 65536,
        timeCost: 3
    });
    const newUser = await User.create({
        email: req.body.email,
        password: hash
    });
    res.status(201).json(newUser);
}
