/**
 * Required External Modules
 */

 const dotenv = require('dotenv');
 const express  = require('express');
 const cors = require("cors");
 const helmet =require("helmet");
 const path=require('path');

 
 dotenv.config();

 require('./database');
 const routes = require('./routes');

 /**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT = process.env.PORT
 
 const app = express();

 
/**
 *  App Configuration
 */

 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 app.use(express.static(path.join(__dirname, "public")));

 /**
  * App route
  */
 routes(app)
 /**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });