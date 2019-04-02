# node-rest-api
Making my first REST API on Node.js

#### Setup:
1. Clone and cd into the repo directory
2. Run `npm install`
3. The API uses Mongo Atlas. Create a `nodemon.json` file in the parent folder and set your Mongo Atlas Admin Credentials as below:
  ``` 
  {
    "env": {
      "MONGO_ATLAS_PW": <your_password>
    }
  }
  ```
  4. Your API is live at `localhost:3600`
