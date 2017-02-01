var http = require('http');

const PORT = 80;

function requestHandler(req, res) {
	res.end(`Hello ${process.platform}`);
}

var server = http.createServer(requestHandler);

server.listen(PORT, function(){
	console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}. CTRL-C to exit.`);
});