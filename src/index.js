//import area
const express = require('express');
const app = express();
require('dotenv').config();




let port = process.env.PORT
app.listen(port,()=>{ 
    console.log(`server on run ${port}`)
})
