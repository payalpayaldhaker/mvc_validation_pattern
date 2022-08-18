const { mongoose } = require('../config/database');
 let shecma = { 
    
        username:String,
        lastname:String,
        email:String,
        password:String
      
        
}
let Student = mongoose.model('Studentallstudents',shecma);
module.exports = {Student}
    