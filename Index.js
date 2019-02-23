// Import express
const express = require('express')

const users = require('./routes/api/lawyers')

// Create the app
const app = express()

// Use it with post
app.use(express.json())

const lawyers = [{name: 'Yasser',
age: '20'},
{
    name: 'Adel'
    ,age: '21'
}]

// Create a lawyer
app.post('/api/lawyer/', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    
    const lawyer = {
        name: name,
        age: age,
        id: lawyers.length + 1
    }
    lawyers.push(lawyer)
    res.send(lawyers)
})

// Update 
app.put('/api/lawyers/:id', (req, res) => {
    const lawyerId = req.params.id 
    const updatedName = req.body.name
    const lawyer = lawyers.find(lawyer => lawyer.id === lawyerId)
    lawyer.name = updatedName
    res.send(lawyers)
})

// Define the port, get it from the enviroment (used in production)
// Or just use 3000
const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


/*
// Direct routes to appropriate files 
app.use('/api/users', users)
app.use('/api/books', books)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

 
const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
*/