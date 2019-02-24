const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');   //Automatically generated ID
const router = express.Router();

function ToString(reviewer)
{
    return `name: ${reviewer.name.first} ${reviewer.name.middle} ${reviewer.name.last}, working hours: ${reviewer.working_hours}, salary: ${reviewer.salary}`;
};

const reviewers =
[{
    id: 1,
    name: { first: "Omar", middle: "Ayman", last: "Abdelmagied" },
    working_hours: 6,
    salary: 3000.0
}];

router.get('/', (req, res) =>
{
    let data = ``;
    reviewers.forEach(r => { data += `<h4> ${r.name.first} ${r.name.middle} ${r.name.last} </h4> <br>\n` });
    res.send(data);
});

router.post('/', (req, res) =>
{
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const working_hours = req.body.working_hours;
    const salary = req.body.salary;

    const schema =
    {
        firstname: Joi.string().min(3).max(20).alphanum(),
        middlename: Joi.string().min(3).max(20).alphanum(),
        lastname: Joi.string().min(3).max(20).alphanum(),
        working_hours: Joi.number().min(3).max(12).integer(),
        salary: Joi.number().min(500.0).max(10000.0)
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const id = uuid.v4();

    reviewers.push(
    {
        id: id,
        name: { first: firstname, middle: middlename, last: lastname },
        working_hours: working_hours,
        salary: salary
    });

    return res.json(200, `id = ${id}`);
});

router.post('/:id', (req, res) =>
{
    const id = req.param.id;
    const name = req.body.name;
    const working_hours = req.body.working_hours;
    const salary = req.body.salary;

    const schema =
    {
        name:
        {
            first: Joi.string().min(3).max(20).alphanum(),
            middle: Joi.string().min(3).max(20).alphanum(),
            last: Joi.string().min(3).max(20).alphanum()
        },
        working_hours: Joi.number().min(3).max(12).integer(),
        salary: Joi.number().min(500.0).max(10000.0)
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const reviewer = 
    {
        id: id,
        name: name,
        working_hours: working_hours,
        salary: salary
    };
    const replaced = reviewers.splice(reviewers.findIndex(r => r.id === id), 1, reviewer);

    try { return res.json(200, `${ToString(replaced[0])} is replaced by ${ToString(reviewer)}`); }
    catch (e) { if (e instanceof RangeError) return res.json(404, 'no such ID exists'); }
});

module.exports = router;