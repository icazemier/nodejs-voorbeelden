'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 *
 * Error handling in the async way!
 *
 */
const path = require('path');
const fs = require('fs');
const async = require('async');



/**
 * This method is self sufficient, and tries to read a file.<br>
 * We're
 * @param {function} callback - Called when done
 */
function readFileFromPath(callback) {

    // Prepare absolute paths to files (but with a faulty reference):
    const relativePathFabricated = path.join(__dirname, 'test-files', 'nodejs-1920x1200.pnggggg');
    const pathToFile = path.resolve(relativePathFabricated);

    // Read the file, and delegate the callback to the `fs.readFile()` function.<br>
    // (In other words, `fs.readFile()` needs to take care of the callback method)
    fs.readFile(pathToFile, callback);
}



// Invoke the function and 'handle' the error
readFileFromPath((err, data) => {
    if (err) {
        console.error(err);
    }
    if (data) {
        console.log(data.byteLength);
    }
});
