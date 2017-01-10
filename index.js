
'use strict';
const http = require('http');
const url = require('url');

var server = http.createServer(function (request, resp) {
    var headers = {};
    if (request.url === '/' || request.url === '/favicon.ico') {
     resp.end(JSON.stringify(process.env))
    }
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("Server running at http://127.0.0.1/ on port " + port);
});

