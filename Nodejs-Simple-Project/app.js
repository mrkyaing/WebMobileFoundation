const http = require('http');
const fs = require('fs'); //declare the file system module
const path = require('path'); //declare the path module

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});