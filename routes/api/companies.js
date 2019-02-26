const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
// Models
const Company = require('../../models/Company');
// temporary data created as if it was pulled out of the database ...
const companies = [
	new Company ('BMW','SSC',1998),
	new Company('NIKE','SSC',1960),
	new Company ('ADDIDAS','SSC',1950)
];
router.get('/', (req, res) => res.json({ data: companies }));
module.exports=router ;

//create a company
router.post('/', (req, res) => {
	const name = req.body.name;
	const type = req.body.type;
	const establishment_date = req.body.establishment_date;

	if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });

	if (!type) return res.status(400).send({ err: 'Type field is required' });
	if (typeof type !== 'string') return res.status(400).send({ err: 'Invalid value for type' });

	if (!establishment_date) return res.status(400).send({ err: 'Date field is required' });
	if (typeof establishment_date !== 'number') return res.status(400).send({ err: 'Invalid value for date' });

	const newCompany = {
		name,
		type,
		establishment_date,
		id: uuid.v4(),
	};
	companies.push(newCompany)
	return res.json({ data: companies });
});

//update company name
router.put('/:id', (req, res) => {
	const companyId = req.params.id 
	
	const updatedname = req.body.name
	console.log(updatedname)
	const updatedtype=req.body.type
	console.log(updatedtype)
	const updateddate=req.body.establishment_date
	console.log(updateddate)
	const company = companies.find(company => company.id === companyId)
	if(!(updatedname===undefined)){
		company.name = updatedname}
	if(!(updatedtype===undefined)){
		company.type=updatedtype
	}
	if(!(updateddate===undefined)){
		company.date = updateddate}
	
    res.send(companies)
})
router.get('/:id', (req, res) => {
    const companyId = req.params.id
    const company = companies.find(company => company.id === companyId)
    res.send(company)
    
})

