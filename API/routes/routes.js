const express = require('express');
const router = express.Router();
const controller = require('../db/dbController');

// ~~ ~~ ~~ products ~~ ~~ ~~
router.get('/products', controller.getProducts);
router.get('/products/:id', controller.getAProduct);
router.post('/products', controller.saveProduct);
router.delete('/products/:id', controller.deleteProduct);

// ~~ ~~ ~~ user ~~ ~~ ~~ 
/*
router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getAUser);
router.post('/users', controller.newUser);
router.put('/users/:id', controller.editUser);
*/

module.exports = router;
