// Requiring the product controller
const productcontroller = require('../../controllers/api/productcontroller_api')

const express = require('express');
const router = express.Router();


 router.get('/',productcontroller.viewAll); // to view all
 router.post('/create',productcontroller.create); // to create
 router.delete('/:id',productcontroller.delete); // to delete
 router.post('/:id/update_quantity',productcontroller.update); // to update

module.exports=router;