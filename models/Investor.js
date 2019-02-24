const uuid = require('uuid')
class Investor {
    constructor(name, age, email, phoneNumber) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.id = uuid.v4();
    };
}

module.exports = Investor
