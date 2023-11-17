const productcontroller = require('../../controllers/api/productcontroller_api')

const express = require('express');
const router = express.Router();



 router.delete('/',productcontroller.delete);
 router.post('/update_quantity',productcontroller.update);


module.exports=router;