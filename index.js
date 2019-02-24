const express = require('express');
const app = express();
app.use(express.json());

const externalEntities = require('./routes/api/externalEntities');
const admins = require('./routes/api/admins')

app.get('/',(req,res) => {
    res.send(`<h1>WelcomeEE</h1>
    <a href="/admins">Admins</a></br>
    <a href="/externalEntities">EE</a></br>`)
    
  })

app.use('/api/externalEntities',externalEntities);
app.use('/api/admins', admins);

app.use((req,res) => {
    res.status(404).send({err:'error 404 object not found '});
})

const port = 8000;
app.listen(port, () => { console.log(`Server is running on port ${port}`) })



// Use it with post  app.use(express.json())  


