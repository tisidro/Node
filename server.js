const http = require('http');
const fs = require('fs');//require fs module to read file
const _ = require('lodash');//it automatically knows to look in node_modules file for this

const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20);//gets us a random number anytime this function runs that's between 0-20
    console.log(num);

    res.setHeader('Content-Type', 'text/html');
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;


        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;



        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        case '/about-cat':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});