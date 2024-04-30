var http = require('http');
var dt = require('./pixel_image_server_module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write( '<img src="' + dt.imageSender() + '" />');
  res.end('Liam');
}).listen(8080);