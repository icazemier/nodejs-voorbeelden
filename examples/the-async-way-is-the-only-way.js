'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 */
function doEpicStuff(callback) {
    setTimeout(() => {
        console.log(`001 - Noice! When: ${new Date()}`);
        callback();
    }, 1000);
}

console.log(`002 - Noice! When: ${new Date()}`);

doEpicStuff(() => {
    console.log(`003 - Done! When: ${new Date()}`);
});

console.log(`004 - Noice! When: ${new Date()}`);
