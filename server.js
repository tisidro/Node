const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    res.write('<p>hello there!</p>');
    res.write('<p>hi again!</p>');
    //creates 2 paragraphs using html. needed to change to 'text/html' instead of 'text/plain'
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});