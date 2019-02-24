const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router()

// Models
const Investor = require('../../models/Investor');


// temporary data created as if it was pulled out of the database ...
const investors = [
	new Investor('Bill Gates', 30, 'microsoft@hotmail.com'),
    new Investor("Alan Turing", 36, 'alan@yahoo.com'),
    new Investor("Ahmed Helmy", 34, 'ahmed20@gmail.com')
 
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all investors
//router.get('/', (req, res) => res.json({ data: investors }));

router.get('/',(req,res)=> {
    var data="";
    investors.forEach(value => {
        data +=`<a href="/investors/${value.id}">${value.name}</a></br>` 
    });   
    res.send(data);
})

//This request returns a specific Investor.
router.get('/id', (req,res)=> 
{
    var data="";
        investors.forEach(record => {
            if(record.id==req.params.id) {
            data =`Id:${record.id}
            Name:${record.name}
            email:${record.email}`
            return
            }
        });
        res.send(data);

})

// Create a new user
router.post('/', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;


	if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!age) return res.status(400).send({ err: 'Age field is required' });
	if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });

	const newInvestor = {
		name,
        age,
        email,
		id: uuid.v4(),
	};
	return res.json({ data: newInvestor });
});

router.post('/joi', (req, res) => {
	const name = req.body.name
    const age = req.body.age
    const email = req.body.email

	const schema = {
		name: Joi.string().min(3).required(),
		age: Joi.number().required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newInvestor = {
		name,
        age,
        email,
		id: uuid.v4(),
	};
	return res.json({ data: newInvestor });
});

module.exports = router;

