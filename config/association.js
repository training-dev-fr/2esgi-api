const User = require('./../model/user.model');
const Role = require('./../model/role.model');
const Product = require('../model/product.model');

exports.associate = async () => {
    Role.belongsToMany(User,{through: "user_has_role"});
    User.belongsToMany(Role,{through: "user_has_role"});

    User.hasMany(Product);
    Product.belongsTo(User);
}