const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MODULE)
.then(()=>{
    console.log("mongodb-connected")
})
.catch(()=>{
    console.log("failed-to-connected")
})

const LogInSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const datal = new mongoose.model("list",LogInSchema)
module.exports=datal
//mXAWtAcJbpt3L8Jc