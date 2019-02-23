const express=require('express');
const app=express();
const externalEntities=require('./routes/api/externalEntities');
const admins = require('./routes/api/admins')

app.use('/externalEntities',externalEntities);
app.use('/admins' , admins)

app.get('/',(req,res) =>{
    res.send(`<h1>WelcomeEE</h1>`)
  })

app.use((req,res) => {
    res.status(404).send({err:'error 404 object not found '});
})

  app.listen(8000,()=>{
    console.log('The server is running');
  })



// Use it with post  app.use(express.json())  


