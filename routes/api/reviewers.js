
//read & delete
//mostafa


// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())

const uuid= require('uuid')
const joi= require('joi')



//temp reviewers
const reviewer = [
    {
        Name: 'Mostafa',
        WorkingHours: 20,
        StartYear: '2000',
        salary: 2000,
        id: '1'
    },
    {
        Name: 'Hassan',
        WorkingHours: 19,
        StartYear: '2001',
        salary: 2000,
        id: '2'
    },
    {
        Name: 'Mohamed',
        WorkingHours: 21,
        StartYear: '2000',
        salary: 2000,
        id: '3'
    },
    {
        Name: 'Mark',
        WorkingHours: 20,
        StartYear: '2000',
        salary: 2000,
        id: '4'
    }
    
]

// Default route (entry point)
app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

// Get all reviewers
app.get('/api/reviewers', (req, res) => {
    res.send(reviewer)
})


// Get a certain reviewer
app.get('/api/reviewers/:id', (req, res) => {
    const RevId = req.params.id
    const Reviewer = reviewer.find(reviewer => reviewer.id === RevId)
    if(Reviewer !== undefined)
       res.send(Reviewer)
    else
       res.send(" <br><br> <h1>Sorry this user does not Exist</h1>")
})




// Delete a Reviwer
app.delete('/api/reviewers/:id', (req, res) => {
    const RevId = req.params.id 
    const Reviewer = reviewer.find(reviewer => reviewer.id === RevId)
    if(Reviewer !== undefined)
    {
        const index = reviewer.indexOf(Reviewer)
        reviewer.splice(index,1)
        res.send(reviewer)
    }
    else
    {
        res.send("<br><br>  <h1>I'm sorry this user does not exist</h1>")
    }
})

const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
 
