var fs = require('fs');
var lib = require('./statement.js');



let invoices = JSON.parse(fs.readFileSync('invoices.json'));

let result = lib(invoices);

console.log(result);

