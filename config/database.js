const {Sequelize} = require('sequelize');

const database = new Sequelize(
    "2esgi-apirest-2026",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = database;