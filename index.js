const express = require('express');
const app = express();

app.use(express.json());

const externalEntities = require('./routes/api/externalEntities');
const admins = require('./routes/api/admins')
const lawyers = require('./routes/api/lawyers')


app.get('/',(req,res) => {
    res.send(`<h1>WelcomeEE</h1>
    <a href="/api/admins">Admins</a></br>
    <a href="/api/externalEntities">EE</a></br>
    <a href="/api/lawyers">lawyers</a></br>`)
    
  })
  // Direct routes to appropriate files 
app.use('/api/lawyers', lawyers)
app.use('/api/externalEntities',externalEntities);
app.use('/api/admins', admins);
// Handling 404
app.use((req, res) => {
  res.status(404).send({err: 'We can not find what you are looking for'});
})


const port = 8000;
app.listen(port, () => { console.log(`Server is running on port ${port}`) })



// Use it with post  app.use(express.json())  


