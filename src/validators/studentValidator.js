const { check } = require("express-validator")

let studensValidator =[
        
               check('username','Invalid username').isAlpha().notEmpty(),
               check('lastname','Invalid lastname').isAlpha().notEmpty(),
               check('email','Invalid email').isEmail(),
               check('password','Invalid password').notEmpty().isLength({min:6,max:100})
               .matches(/\d/).withMessage('atleast one digit')
               
        ]
module.exports ={studensValidator}