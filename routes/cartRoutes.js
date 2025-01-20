const express = require('express');
const cartController = require('./controllers/cartController.js');

const router = express.Router();

router.post('/add', cartController.addToCart);
router.put('/update', cartController.updateCartItem);
router.delete('/delete', cartController.deleteCartItem);

module.exports = router;
