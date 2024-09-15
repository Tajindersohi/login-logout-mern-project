const mongoose = require('mongoose') 
const connectDb = async () => {
    return mongoose.connect(process.env.CONNECTIN_STRING, {
       useNewUrlParser : true,
       useUnifiedTopology : true, 
    }) 
}
module.exports = {connectDb}