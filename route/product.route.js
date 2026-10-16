const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth.middleware.js');
const { hasRole } = require('../middleware/hasRole.middleware.js');
const productController = require('./../controller/product.controller.js');
const { isOwnerOrAdmin } = require('../middleware/isOwnerOrAdmin.middleware.js');

router.get('/',auth, productController.getAll);

router.get('/:id', productController.getById);


router.post('/',auth,hasRole('SEL'), productController.create);

router.put('/:id',auth,hasRole(['SEL','ADM']),isOwnerOrAdmin, productController.update);

router.delete('/:id',auth,hasRole(['SEL','ADM']),isOwnerOrAdmin, productController.delete);

module.exports = router;