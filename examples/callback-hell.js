'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 *
 * Another callback example where we can see we're having troubles with nested callbacks.
 * You can see immediately this not maintainable code...
 * How can we solve this??
 *
 *
 */
const path = require('path');
const fs = require('fs');

// Prepare absolute paths to random files:
const BASE_DIRECTORY_FILES = 'test-files';
const FILE1 = path.resolve(path.join(__dirname, BASE_DIRECTORY_FILES, 'nodejs-1920x1200.png'));
const FILE2 = path.resolve(path.join(__dirname, BASE_DIRECTORY_FILES, 'nodejs-logo.png'));
const FILE3 = path.resolve(path.join(__dirname, BASE_DIRECTORY_FILES, 'text-file.txt'));

/**
 * Read some files sequentially<br>
 * But as one can see, this is not:<br>
 * - Readable (at all!)
 * - Maintainable
 *
 * @param {function} callback - Is called when all files are read
 */
function readAllFilesNowww(callback) {
    fs.readFile(FILE1, () => {
        fs.readFile(FILE2, () => {
            fs.readFile(FILE3, () => {
                fs.readFile(FILE1, () => {
                    fs.readFile(FILE1, () => {
                        fs.readFile(FILE1, () => {
                            fs.readFile(FILE1, () => {
                                fs.readFile(FILE1, () => {
                                    fs.readFile(FILE1, () => {
                                        // After all files are read, we arrive here at last!
                                        callback();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

// Execute the function
readAllFilesNowww(() => {
    console.log('Done reading, finally!');
});
