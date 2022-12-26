const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const {GetStudents, PostStudents,PutStudents,DeleteStudents} = require('./data');
const mySql = require('mysql2')
const app = express();


app.use(express.json())









// const pool=mySql.createConnection({
//   host:"localhost",
//   user:"root",
//   database:"mgl-site",
//   password:"88560820"
// })

app.use('/public',express.static('public'))
// let students;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
// GET POST PUT DELETE //crud
app.get('/students', async (req,res)=>{
    const students=await GetStudents()
    res.send(students)

})

app.post('/students', async(req,res)=>{ 

  const data= await PostStudents(req.body)
  res.send(data)
  // (err,data)=>{
  //   if(err){
  //     throw err
  //   }else{
  //     console.log(data)
  //   }
  // }
  // )
});

app.put('/students', async(req,res)=>{
  console.log("A14", req.body)

  const bazz=await PutStudents(req.body)
  res.send(bazz)
  // (err, data)=>{
  //   if(err){
  //     throw err
  //   }else{
  //     console.log(data)
  //   }
  // }
});
app.delete('/students/:id', async(req,res)=>{
  console.log('a99',req.params.id)

  const dell = await DeleteStudents(req.params.id)
  
  res.send(dell)
  // (err, data)=>{
  //   if(err){
  //     throw err
  //   }
  //   else{
  //     console.log(req.params.id)
  //   }
  // }
})
app.listen(3000, async ()=>{
  console.log("server listen 3000port")
})




















































