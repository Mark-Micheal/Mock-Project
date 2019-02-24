const express=require('express');
const app=express();
const externalEntities=require('./routes/api/externalEntities');
const admins = require('./routes/api/admins')
const investors = require('./routes/api/investors')

app.use('/externalEntities',externalEntities);
app.use('/admins', admins)
app.use('/investors',investors)

app.get('/',(req,res) =>{
    res.send(`<h1>WelcomeEE</h1>
    <a href="/admins">Admins</a></br>
    <a href="/externalEntities">EE</a></br>
    <a href="/investors">Investors</a></br>`)
    
  })


app.use((req,res) => {
    res.status(404).send({err:'error 404 object not found '});
})

  app.listen(8000,()=>{
    console.log('The server is running');
  })



// Use it with post  app.use(express.json())  


