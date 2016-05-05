var fs = require('fs');

var file = process.argv[2];
var fileContent = fs.readFileSync(file).toString();
var array = fileContent.split('\n');
console.log(array.length - 1);
