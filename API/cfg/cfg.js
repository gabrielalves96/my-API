const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/apiEStore', {useNewUrlParser: true});
require('../db/productSchema');
require('../db/userSchema');
// criar o schema de usuario com carrinho tambem!

const routes = require('../routes/routes');
app.use('/api', routes);

module.exports.app = app;
//module.exports.mongoose = mongoose;