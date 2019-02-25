const uuidv4 = require('uuid/v4');

class Investor {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.id = uuidv4();
        
    };
}

module.exports = Investor
