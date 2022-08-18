//import area
const express = require('express');
const { adminRoute } = require('./routes/admin/adminRoute');
const app = express();
app.use(express.json());
require('dotenv').config();
//app.use(express.json());
app.use('/admin',adminRoute)

let port = process.env.PORT
app.listen(port,()=>{ 
    console.log(`server on run ${port}`)
})
