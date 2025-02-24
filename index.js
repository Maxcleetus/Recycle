const express = require('express')
const app = express()
//app.use("express.json()")
app.set("view engine","ejs")

//app.use("express.urlencoded({extended:true})")

app.get('/', function (req, res) {
  res.render("index")
})

app.listen(3000,()=>{
    console.log("server started")
})