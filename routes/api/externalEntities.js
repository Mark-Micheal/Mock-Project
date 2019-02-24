const express = require('express');
//const bodyParser=require('body-parser');
const ExternalEntity = require('../../models/ExternalEntity');
const router = express.Router();

//router.use(bodyParser.urlencoded({extended:true}))

const externalEntities = [
    new ExternalEntity(1,'Taxes',001122,'@1'),
    new ExternalEntity(2,'Insurance',221100,'@11'),
    new ExternalEntity(3,'Defense',002211,'@111'),
    new ExternalEntity(4,'Security',112200,'@1111')
];


/*
router.use('/addEntity', function(req,res){
res.send('addEntity.html')

})
*/

/*
router.post('/addEntity',function(req,res){
    externalEntities.push({
        ID:req.body.ID,
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    })
    })
*/

// Reading an entity
// this lists all our instances as hypertexts that redirects us to: /externalEntities/about/:id that you clicked on
    router.get('/',(req,res)=> {
        var data="";
        externalEntities.forEach(value => {
            data +=`<a href="/externalEntities/about/${value.id}">${value.name}</a></br>` 
        });   
        res.send(data);
    })

    // this displays all the data belonging to the instance that you pressed on
    router.get('/about/:id',function(req,res){ 
        var data="";
        externalEntities.forEach(value => {
            if(value.id==req.params.id) {
            data =`Id:${value.id}
            Name:${value.name}
            phone:${value.phone}
            email:${value.email}`
            return
            }
        });
        res.send(data);
    })


// Deleting an entity   
// Exaclty the same as Reading but the URL is localhost8000/externalEntities/delete instead of  localhost8000/externalEntities
    router.get('/delete',(req,res)=> {
        var data="";
        externalEntities.forEach(value => {
            data +=`<a href="/externalEntities/delete/${value.id}">${value.name}</a></br>` 
        }); 
        res.send(data);
    })

    // Delete the entity that you click on
    router.get('/delete/:id',function (req,res) {
        const EEid = externalEntities.find(EEid=>EEid.id==req.params.id);
        externalEntities.splice(externalEntities.indexOf(EEid),1);
        res.redirect('/externalEntities/delete')

    } )

//router.get('/', (req, res) => res.json({ data: externalEntities }))

// Creating a new external entity.
router.post('/', (req, res) => {
    const id = req.body.id;
	const name = req.body.name;
    const phone = req.body.phone;
    
    const email = req.body.email;
    

	if (!id) return res.status(400).send({ err: 'ID field is required' });
	if (typeof id !== "number") return res.status(400).send({ err: 'Invalid value for ID' });
    

    if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== "string") return res.status(400).send({ err: 'Invalid value for Name ' });
	

    if (!phone) return res.status(400).send({ err: 'Phone field is required' });
    if (typeof phone !== "number") return res.status(400).send({ err: 'Invalid value for Phone' });
    

    if (!email) return res.status(400).send({ err: 'Email field is required' });
    if (typeof email !== "string") return res.status(400).send({ err: 'Invalid value for Email' });
    
	
	const newExternalEntity = {
        id,
        name,
		phone,
        email,
    };
    

    externalEntities.push({
        id:req.body.id,
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    })


    return res.json({ data: newExternalEntity });
    
});


// Updating an external entity's name,phone & email 
router.put('/', (req, res) => {
    const externalEntityId = req.body.id 
    const updatedName = req.body.name
    const updatedPhone = req.body.phone
    const updatedEmail = req.body.email
    const externalEntity = externalEntities.find(ExternalEntity => ExternalEntity.id === externalEntityId)
    externalEntity.name = updatedName
    externalEntity.phone = updatedPhone
    externalEntity.email = updatedEmail
    res.send(externalEntities)
})



module.exports = router;
