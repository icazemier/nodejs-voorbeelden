'use strict';

class User {

    /**
     * 
     * @param {string} name 
     * @param {number} age 
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static someStaticFunction() {
        console.log('Mooi');
    }

}
/**
 * @constructor
 * @param {string} name 
 * @param {number} age 
 */
function AnotherUser(name, age) {
    this.name = name;
    this.age = age;
}

AnotherUser.someStaticFunction = function () {
    console.log('Ook Mooi');
};

const user = new User('John Do', 200.0);
User.someStaticFunction();

const anotherUser = new AnotherUser('John Do', -19);
AnotherUser.someStaticFunction();

console.log(`Users age:${user.age}`);
console.log(`AnotherUser age:${anotherUser.age}`);