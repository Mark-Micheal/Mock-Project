const uuid =require('uuid');

class Company{
    constructor(name,type,establishment_date){
    this.name=name;
    this.type=type;
this.establishment_date=establishment_date;
    this.id=uuid.v4();
    };
}

module.exports = Company