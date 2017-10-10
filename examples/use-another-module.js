'use strict';

/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 */
// To require a modele
const Fraction = require('../lib/math/fraction');

// Start using the module and construct a new Fraction instance
const fraction1 = new Fraction();

// Assign new values for the fraction
fraction1.numerator = 2;
fraction1.denominator = 6;


const fraction2 = new Fraction();
fraction2.numerator = 1;
fraction2.denominator = 7;

const result1 = fraction1.multiply(fraction2);
console.log('multiply: 2/6 with 1/7 = ' + result1);

const result2 = fraction1.divide(fraction2);
console.log('divide: 2/6 by 1/7 = ' + result2);

const result3 = fraction1.add(fraction2);
console.log('add: 2/6 and 1/7 = ' + result3);

const result4 = fraction1.substract(fraction2);
console.log('substract: 2/6 from 1/7 = ' + result4);
