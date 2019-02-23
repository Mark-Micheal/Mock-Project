var express=require('express');
var app=express();
var externalEntities=require('./routes/api/externalEntities');

app.use('/externalEntities',externalEntities);

app.get('/',(req,res) =>{
    res.send(`<h1>WelcomeEE</h1>`)
  })
  
  app.listen(8000,()=>{
    console.log('The server is running');
  })
