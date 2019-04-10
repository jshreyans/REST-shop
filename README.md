# node-rest-api
Making my first REST API on Node.js

The API uses MongoDB(Atlas). For a detailed guide on how to connect to a Mongo database, refer to these links:
- [Connect to Mongo](https://docs.mongodb.com/guides/server/drivers/)
- [Setup Atlas](https://docs.mongodb.com/guides/cloud/connectionstring/)

#### Setup:
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
  4. Your API is live at `localhost:3600`
