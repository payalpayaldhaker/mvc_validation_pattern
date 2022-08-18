const { Student } = require('../../models/Student')
const {  validationResult } = require('express-validator');


let studentControler = async(req,res)=>{ 

    const errors = validationResult(req)
    
    if (errors.isEmpty()){
        let studentObject = await new Student(req.body);
        //console.log(req.body)
        studentObject.save()
        .then(()=>{
            res.status(200).json({ 
                "data":studentObject
            })
            //console.log(studentObject);
        })
        .catch((err)=>{ 
            res.status(500).json({ 
                "data":"error",
                error:err
            })
            //console.log(err);
        })
    }
    else{ 
        res.status(400).json({ 
            errors: errors.array()
        })
            
      }
  
    
    
}
exports.studentControler = studentControler