'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 *
 * Streams are a bit feature of Node.js
 *
 * Think of streams
 *
 */

const path = require('path');
const fs = require('fs');
const bigFilePath = path.resolve(path.join(__dirname, './test-output/big.file'));
const fileWriteStream = fs.createWriteStream(bigFilePath, { encoding: 'utf-8' });

console.log('Creating write stream, waiting on the `open` event');

// We need to wait for the file to `open`
fileWriteStream.on('open', (fd) => {

    console.log('File openend! Let\'s start dumping some random text in.');
    for (let i = 0; i < 1e6; i++) {
        fileWriteStream.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
    }
    console.log('Done writing stream, closing it now...');
    fileWriteStream.end();

    console.log('Lets create a read stream, which enables us to stream the contents!');
    const readableStream = fs.createReadStream(bigFilePath);

    console.log('Lets create a write stream, to make a copy of the big file');
    const bigFileCopyPath = path.resolve(path.join(__dirname, './test-output/big-copy.file'));
    const writableStream = fs.createWriteStream(bigFileCopyPath);

    // Copy!
    readableStream.pipe(writableStream);

});



