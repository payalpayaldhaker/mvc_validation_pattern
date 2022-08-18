const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DBNAME}.9dohe.mongodb.net/?retryWrites=true&w=majority`)
.then(data =>console.log('connected'))
.catch(error=>console.log('error',error));

exports.mongoose = mongoose