'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 *
 * A really basic example of the callback way in node.js
 *
 * Callbacks are the main technique to mainly wait for 'io' (input/output) in Node.js.<br>
 * Node makes heavy use of callbacks!
 *
 * Just some statements to think about:
 * - Communicate with a database and wait for a response
 * - Invoke a timer, and see the result later in time
 * - Read/Write a file on storage
 * - Asynchronous way of programming
 * - Concurrency is common practice
 */

/**
 * Define a callback function to be parsed as an argument for the delay function
 */
function myCallback() {
    console.log(`myCallback invoked at ${new Date()}!`);
};

/**
 * This method will delay the invocation of the callback
 */
function delay() {
    console.log(`delay      invoked at ${new Date()}!`);

    // Start a timeout of 2 seconds (2000 ms) then invoke `myCallback`
    setTimeout(myCallback, 2000);
}


// Invoke this `delay` method to demonstrate the async way
delay();

console.log('Done       but wait...');
