//The form model
const uuidv4 = require('uuid/v4');

class Form {
    constructor(company, data) {
        this.id = uuidv4();
        this.company = company;
        this.data = data;
    };
};

module.exports = Form;