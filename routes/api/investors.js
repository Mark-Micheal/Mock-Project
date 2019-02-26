const express = require('express');
const uuid = require('uuid/v4');
const router = express.Router()

//Investor model
const Investor = require('../../models/Investor');


// temporary data created as if it was pulled out of the database.
const investors = [
	new Investor('Bill Gates', 30, 'microsoft@hotmail.com'),
    new Investor('Alan Turing', 36, 'alan@yahoo.com'),
    new Investor('Ahmed', 20, 'ahmed20@gmail.com'),
    new Investor('Omar', 17, 'omar@outlook.com')
];


// Default route ..returns all investors in the array.
router.get('/', (req, res) => res.json({data:investors}));

//Return a specific investor with ID in URL. 
router.get('/:id', (req,res)=> 
{   
    const investorId = req.params.id;
    const returned = investors.find_by_uuid(investor => investor.id === investorId)
    res.send(returned);
})

// Creating a new investor.
router.post('/', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;

	if (!name) return res.status(400).send({ err: 'Name field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    
	if (!age) return res.status(400).send({ err: 'Age field is required' });
    if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });
    
    if (!email) return res.status(400).send({ err: 'Email field is required' });

	const newInvestor = {
        name,
        age,
        email,
        id: uuid.v4()
    };

    investors.push(newInvestor);

	return res.json({ data: investors });
});

//Updating an Investor record.
router.put('/', (req, res) => {

    const id = req.body.id;
    const newName = req.body.name;
    const newAge = req.body.age;
    const newEmail = req.body.email;
    const investorToBeUpdated = investors.find_by_uuid(Investor => Investor.id === id);
    investorToBeUpdated.name = newName;
    investorToBeUpdated.age = newAge;
    investorToBeUpdated.email = newEmail;

    res.send(investors);


})

module.exports = router;

