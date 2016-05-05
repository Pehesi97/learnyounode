var dir = process.argv[2];
var ext = process.argv[3];

var dirFilter = require('./dirfilter.js');

dirFilter(dir, ext, function(err, data) {
	data.forEach(function(file) {
		console.log(file);
	});
});
