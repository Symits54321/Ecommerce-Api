const productcontroller = require('../../controllers/api/productcontroller_api')

const express = require('express');
const router = express.Router();


 router.get('/',productcontroller.viewAll);
 router.post('/create',productcontroller.create);
 //router.use('/:id',require('./updateDelete'));
 
 router.delete('/:id',productcontroller.delete);
 router.post('/:id/update_quantity',productcontroller.update);

module.exports=router;