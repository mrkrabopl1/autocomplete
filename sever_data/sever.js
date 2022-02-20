const http = require("http");
const data = require("./data.json");
const host = 'localhost';
const port = 3000;
console.log(data)
http.createServer( function(requset, response){
    response.setHeader("Content-Type", "application/json");
    response.writeHead(200);

    response.end(JSON.stringify(data));
}).listen(8080);

