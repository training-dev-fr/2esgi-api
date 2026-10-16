const database = require('./../config/database.js');
const {associate} = require('./../config/association.js');
const User = require('./../model/user.model.js');
const Role = require('./../model/role.model.js');
const Product = require('./../model/product.model.js');

async function sync(){
    await associate();
    await database.sync();
}

sync();