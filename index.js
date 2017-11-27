var express = require('express'),
    app = express();

app.use(express.static('./'));

// Loading socket.io
var io = require('socket.io').listen(app.listen(3000));

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    console.log('A client is connected!');
});
