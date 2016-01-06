/*
 * HammerForge
 * Created by: Eric Welsh and Aaron Pfalzgraf
 * January 2016
 * All code and assets in this application are the intellectual property of 
 * Eric Welsh and Aaron Pfalzgraf
 */

// Load the http module to create an http server.
var http = require('http','error');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("\n");
});
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT, process.env.IP);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");