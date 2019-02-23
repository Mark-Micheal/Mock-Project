const express = require('express');

const router = express.Router();

const Admin = require('../../models/Admin');

router.get('/:id', (req, res) => {            //Read specific admin
    const adminId = req.params.id
    const admin = admins.find(admins => admins.id === adminId)
    res.send(admin)
})

router.get('/', (req, res) => {            //Read all admins
    res.send(admins)
})

router.delete('/:id', (req, res) => {            //Delete
    const adminId = req.params.id 
    const admin = admins.find(admins => admins.id === adminId)
    const index = admins.indexOf(admin)
    admins.splice(index,1)
    res.send(admins)
})




module.exports = router ;