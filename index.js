












const admins = require('./routes/api/admins')
// Use it with post  app.use(express.json())  
app.use('/admins' , admins)

app.use((req,res) => {
    res.status(404).send({err:'error 404 object not found '});
})
