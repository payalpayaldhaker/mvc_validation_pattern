const express =require('express');
const { studentControler } = require('../../controllers/admin/studentControler');
const { studensValidator } = require('../../validators/studentvalidator');
const  adminRoute = express.Router();

adminRoute.post('/students',studensValidator,studentControler);

module.exports ={adminRoute}