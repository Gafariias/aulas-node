const http = require("http");

const hostname = "localhost";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Hello, World");
});

server.listen(3333, hostname, () => {
    console.log('Server is running in localhost:3333');
});