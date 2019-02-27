// Dependencies
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

// Create a new lawyer
router.post('/', (req, res) => {
	const name = req.body.name;
	const age = req.body.age;

	if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!age) return res.status(400).send({ err: 'Age field is required' });
	if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });

	const newLawyer = {
		name,
		age,
		id: uuid.v4(),
	};
	return res.json({ data: newLawyer });
});


router.post('/joi', (req, res) => {
	const name = req.body.name
	const age = req.body.age

	const schema = {
		name: Joi.string().min(3).required(),
		age: Joi.number().required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newLawyer = {
		name,
		age,
		id: uuid.v4(),
	};
	return res.json({ data: newLawyer });
});


//Updating a Lawyer record.
router.put('/', (req, res) => {
    const id = req.body.id;
    const newName = req.body.name;
    const newAge = req.body.age;
    const lawyerToBeUpdated = lawyers.find_by_uuid(Lawyer => Lawyer.id === id);
    lawyerToBeUpdated.name = newName;
    lawyerToBeUpdated.age = newAge;
    res.send(lawyers);
})

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

module.exports=router;
