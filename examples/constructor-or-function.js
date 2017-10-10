'use strict';
/*
The `this` Keyword

In JavaScript, the thing called `this`, is the object that "owns" the current code.

The value of `this`, when used in a function, is the object that "owns" the function. 
*/

/**
 * A method or a constructor??
 */
function WhatTheFudgeIsThis() {
    const fudge = 12;
}

// Invoke the function ('Functional programming'):
const whatTheFudgeIsThis1 = WhatTheFudgeIsThis();
console.log(whatTheFudgeIsThis1);

// Construct a new instance with the `new` expression ('Object oriented programming'):
const whatTheFudgeIsThis2 = new WhatTheFudgeIsThis();
console.log(whatTheFudgeIsThis2);

/**
 * Another with a special this keyword!
 */
function WhatTheFudgeIsThat() {
    console.log(this);
    this.fudge = 'Fudge it much too sweet!';
    console.log(this);
}

// Okay okay... Let's focus on OOP a bit

// Now again, but with the brackets
const whatTheFudgeIsThat2 = new WhatTheFudgeIsThat();




