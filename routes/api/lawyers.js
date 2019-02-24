const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Lawyer = require('../../models/Lawyer');
// temporary data created as if it was pulled out of the database ...
const lawyers = [
	new Lawyer('Barney', 30),
	new Lawyer('Lilly', 27),
	new Lawyer('Ted', 29),
	new Lawyer('Marshal', 27),
	new Lawyer('Robin', 28)
];
router.get('/', (req, res) => res.json({ data: lawyers }));

// Get a certain lawyer
router.get('/api/lawyers/:id', (req, res) => {
    const lawyerId = req.params.id
    const lawyer = lawyers.find(lawyer => lawyer.id === lawyerId)
    res.send(lawyer)
})
//delete lawyer
 
router.delete('/api/lawyers/:id', (req, res) => {
    const lawyerId = req.params.id
    const lawyer = lawyers.find_by_uuid(lawyer => lawyer.id===lawyerId)
    const index = lawyers.indexOf(lawyer)
    lawyers.splice(index,1)
    res.send(lawyers)
})





module.exports=router ;
