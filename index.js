const express = require('express')
const app = express()
const datal = require('./mongodb')
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.render("index")
})
app.get('/signup',(req,res)=>{
  res.render('signup')
})

app.post('/signup',async(req,res)=>{
  const data = {
    name:req.body.name,
    password:req.body.password
  }
  await  datal.insertMany([data])
  console.log(data)
  res.render('indexx')
})

app.get('/login',(req,res)=>{
  res.render('login')
})

app.post('/login',async(req,res)=>{
  try{
   const dataa = await datal.findOne({name:req.body.name})
   if(dataa.password === req.body.password){
    console.log(dataa.password)
    console.log(req.body.password)
    res.render('indexx')
   }else{
    res.render('wrong')
   }
  }
  catch{
    res.render('wrong')
  }
})

app.listen(3000,()=>{
    console.log("server started")
})