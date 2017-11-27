var express = require('express'),
    app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
		ip  = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'


app.use(express.static('./'));

// Loading socket.io
//var io = require('socket.io').listen(app.listen(3000));

// When a client connects, we note it in the console
// io.sockets.on('connection', function (socket) {
//     console.log('A client is connected!');
// });


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
