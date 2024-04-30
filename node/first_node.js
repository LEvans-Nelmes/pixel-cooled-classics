var http = require('http');
var dt = require('./first_module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("The date and time are currently: " + dt.myDateTime());
  res.send(`
    <!DOCTYPE html>    <html>
    <body>
    <h1>Winter</h1>
    <p>I love the snow!</p>
    </body>
    </html>`
    )
  // res.end('Liam is ace!');
}).listen(8080);