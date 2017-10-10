'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 */
const http = require('http');
const port = 1337;

const requestHandler = (request, response) => {
    console.log(`Got a GET request at: ${new Date()}`);
    response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});
