const express = require('express');
const app = express();
const userRouter = require('./route/user.route.js');
const productRouter = require('./route/product.js');
const authRouter = require('./route/auth.route.js');

app.use(express.json());

app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/auth',authRouter);

module.exports = app;