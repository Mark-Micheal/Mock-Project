const express = require('express');   // Import express

const admins = require('./routes/api/admins')

const app = express()                 // Create the app
app.use(express.json())               // Use it with post



app.get('/' , (req,res) => {
    res.send(`
        <h1> Welcome </h1>
        <a href="/api/admins">Admins</a>
    `);
})

app.use('/api/admins' , admins)

app.use((req,res) => {
    res.status(404).send({err:'error 404 object not found '});
})

const port = 3000;
app.listen(port , () => console.log(`Server up and running on port ${port}`))

