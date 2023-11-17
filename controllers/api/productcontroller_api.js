//Requiring the product model
const productModel = require('../../models/product_model');


// to view all list of products
module.exports.viewAll = async function (req, res) {
  
  try {
    
    let products = await productModel.find({});


       if(products){
  
            return res.status(200).json({
              message: 'List of products',
              data: products
            });

        }else{

          return res.status(200).json({
            message: 'No products / please create a product',
            
          });

        }

     

  } catch (error) {
    console.error('Error reading CSV file:', error);
    res.status(500).send('Error viewing ');
  }



}

// to create products
module.exports.create = async function (req, res) {
 
   console.log("create req is " + req.body.name);

  try {
          let product = await productModel.create(
              req.body
          );
            
                if(product){

                      return res.status(200).json({
                                message: "product created",
                                data:product         
                          });

                  }else{
                    
                    return res.status(200).json({
                            
                      message: "Failed to create the product",

                    });
                }


      } catch (error) {

          console.error("creating error"+error);

          return res.status(500).json({
                message: "Internal Server Error while creating"+req.body,
          });
      }

};


  
// to delete products
module.exports.delete=async function(req,res){

  console.log("Deleted id "+req.params.id);

  try {

          const productId = req.params.id; // getting the :id 

          const deletedproduct = await productModel.findByIdAndDelete(productId);

          if(deletedproduct){         // if deleted

                res.status(200).json({
                  message: 'product deleted ' 
                  });

            }else{
              
              res.status(200).json({
                message: 'product not found ' 
              });
            }

  }catch(error) {

      console.error("product delete error"+error);
      res.status(500).json({ 
        message: 'Internal Server Error while deleting / product not found',
        error:error
       });
    }
}




// to update products
module.exports.update=async function(req,res){

  console.log("product by Api update "+req);

  try {

          const productId = req.params.id;  // getiing the :id 
          const quantity = req.query.number;   // getting the ?number

          const updateProduct = await productModel.updateOne({ _id: productId }, { $set: { quantity: quantity } });

          if(updateProduct){         // if product updated

            let updatedproduct= await productModel.findById(productId);

                 

                      res.status(200).json({
                        message: 'product update successfull ' ,
                        data:updatedproduct,
                       
                      });


            }else{
              
              res.status(500).json({
                message: `product not found matching id= ${productId}`,
             
              });
            }

  }catch(error) {

      console.error("product update error"+error);
      res.status(500).json({ 
        message: 'Internal Server Error while updating/ product not found',
        error:error
       });
    }
}

