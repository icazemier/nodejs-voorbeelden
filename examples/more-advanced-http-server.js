'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 *
 * This example makes use of the well known express.js node module!<br>
 * - We start by requiring the corresponding module.<br>
 * - We create an instance of a web app
 * - Define a constance of the TCP port express will be listening on
 *
 */
const express = require('express');

const app = express();
const PORT = 1338;

// This is called middleware and listens to a GET request on `http://localhost:1338/`
app.get('/', (request, response) => {
    console.log(`Got a GET request on '/' at: ${new Date()}`);
    response.send('Hello from Express!')
});

// Start the server by listening on a specific TCP port
app.listen(PORT, (err) => {
    if (err) {
        return console.error('something bad happened', err);
    }
    console.log(`server is listening on ${PORT}`);
});
