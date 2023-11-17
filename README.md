# Ecommerce-Api
Basic api with CRUD operations


OPERATION (that can be done using POSTMAN)
 
To View all:-
    Req type = [get]
    ,then
   http://localhost:8280/products

To Create :-
    Req type = [post]    
    also  send raw Json data 
    {
    "name": "HP" ,
    "quantity":"130"
    }
    ,then
http://localhost:8280/products/create
 


To update:-
    Req type = [post]
     if :--  id = 65573601eca01ef1926822d9   and quantity=10  
     ,then
   http://localhost:8280/products/65573601eca01ef1926822d9/update_quantity/?number=10


To delete:-
    Req type = [delete]
      id = 65573601eca01ef1926822d9
      ,then
   http://localhost:8280/products/65573601eca01ef1926822d9


