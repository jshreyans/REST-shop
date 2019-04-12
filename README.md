# Creating a RESTful API to handle a basic online shop
The API is made with Node.js and can handle basic order and product display requests.

It uses MongoDB(Atlas) as the database. For a detailed guide on how to connect to a Mongo database, refer to these links:
- [Connect to Mongo](https://docs.mongodb.com/guides/server/drivers/)
- [Setup Atlas](https://docs.mongodb.com/guides/cloud/connectionstring/)

## Setup:
1. Clone and cd into the repo directory
2. Run `npm install`
3. Create a `nodemon.json` file in the parent folder and set your Mongo Atlas User Credentials as below:
  ``` 
  {
    "env": {
      "MONGO_ATLAS_PW": <your_password>
    }
  }
  ```
## Endpoints:
1. `/products`
    - Uses [multer](https://www.npmjs.com/package/multer) to handle image upload
    - Create/delete/patch methods all require authentication
    - Responses expected:
      - Create a new product
      - Display all existing products with a count or specific product by id
      - Delete a product by its id
      - Update details of existing product
      
2. `/orders`
    - All features require authentication from signed up user
    - Responses expected:
      - Create a new order
      - Fetch all existing orders
      - `(/orders/:orderID)` Delete an existing order by id
      - `(/orders/:orderID)`  Fetch order by id 
      
3. `/user`
    - Uses [bcrypt](https://www.npmjs.com/package/bcrypt) and [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) to authenticate user signup and login
    - Responses expected:
      - Signup a new user
      - Login for existing user
      - Delete existing user
