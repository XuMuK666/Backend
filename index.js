const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
    var payload = {
        data: {
          message: 'Hello!'
        }
      };
      notificationHubService.gcm.send(null, payload, function(error){
        if(!error){
          //notification sent
        }
      });
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
