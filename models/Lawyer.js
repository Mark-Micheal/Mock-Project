const uuid = require('uuid')

class Lawyer{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.id = uuid.v4();
    };
}

module.exports = Lawyer