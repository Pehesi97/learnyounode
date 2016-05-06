var net = require('net');

var server = net.createServer(function(socket) {
    function zeroPad(num, numZeros) {
        var n = Math.abs(num);
        var zeros = Math.max(0, numZeros - Math.floor(n).toString().length );
        var zeroString = Math.pow(10,zeros).toString().substr(1);
        if(num < 0) {
            zeroString = '-' + zeroString;
        }
        return zeroString+n;
    }

    var date = new Date();
    socket.end(date.getFullYear() + "-" + ('00' + (date.getMonth() + 1)).slice(-2) + "-" + ('00' + date.getDate()).slice(-2) + " " + ('00' + date.getHours()).slice(-2) + ":" + ('00' + date.getMinutes()).slice(-2) + '\n');
});
server.listen(process.argv[2]);
