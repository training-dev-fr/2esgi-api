const express = require('express');
const app = express();
const userRouter = require('./route/user.js');
const productRouter = require('./route/product.js');

app.use(express.json());

app.use('/user',userRouter);
app.use('/product',productRouter);

module.exports = app;