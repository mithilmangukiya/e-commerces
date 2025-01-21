const express = require("express")
const router = express.Router()
const upload = require('../config/multer-config')
const productModel = require('../models/product-model')
const {productAdd, productDelete, productUpdate, showSingleProduct , showproduct} = require('../controllers/productController')


router.post('/productAdd',  upload.single('images') , productAdd)

 


router.post('/productDelete', productDelete);

router.post('/productUpdate', upload.single('images'), productUpdate)


router.get('/showSingleProduct', showSingleProduct)

router.get('/showAllProducts', showproduct)



module.exports = router