'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 *
 * This is the same as `callback-hell.js`, but we used a <b>very</b> important node_module to make the code readable!
 *
 */
const path = require('path');
const fs = require('fs');
const async = require('async');

// Prepare absolute paths to files:
const BASE_DIRECTORY_FILES = 'test-files';
const FILE1 = path.resolve(path.join(__dirname, BASE_DIRECTORY_FILES, 'nodejs-1920x1200.png'));
const FILE2 = path.resolve(path.join(__dirname, BASE_DIRECTORY_FILES, 'nodejs-logo.png'));
const FILE3 = path.resolve(path.join(__dirname, BASE_DIRECTORY_FILES, 'text-file.txt'));

/**
 * Read some files sequentially<br>
 * But as one can see, this is already improved because:<br>
 * - Readable (not nested anymore)<br>
 * - Maintainable (easy to move methods arround, for instance in another order or extract code)<br>
 *
 * @param {function} callback - Is called when all files are read
 */
function getToTheChopperNowww(callback) {
    async.series([
        callback => fs.readFile(FILE1, callback),
        callback => fs.readFile(FILE2, callback),
        callback => fs.readFile(FILE3, callback),
        callback => fs.readFile(FILE1, callback),
        callback => fs.readFile(FILE1, callback),
        callback => fs.readFile(FILE1, callback),
        callback => fs.readFile(FILE1, callback),
        callback => fs.readFile(FILE1, callback),
        callback => fs.readFile(FILE1, callback)
    ], callback);
}

// Execute the function
getToTheChopperNowww(() => {
    console.log('Done reading, finally!');
});
