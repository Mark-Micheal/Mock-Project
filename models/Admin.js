//The admin model
const uuidv4 = require('uuid/v4');

class Admin {
    constructor(name, email, dateOfBirth, workingHours, salary) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.workingHours = workingHours;
        this.salary = salary;
    };
};

module.exports = Admin;
