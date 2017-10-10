/**
 * @author Ivo Cazemier <git@warmemelk.nl>
 *
 */

const TYPE_ERROR = 'fraction is not of type Fraction';

/**
 * Fraction
 * @constructor
 * <br>
 *  numerator         teller (NL)<br>
 * -----------   =   --------<br>
 * denominator        noemer (NL)<br>
 */
function Fraction() {
    this.numerator = 0;
    this.denominator = 0;
};


/**
 * This will simplify the fraction and find it's greatest common factor
 */
Fraction.prototype.simplify = function () {
    let rest;
    let number1 = this.numerator;
    let number2 = this.denominator;

    //bepaal grootste gemeenschappelijke deler
    do {
        rest = number1 % number2;
        number1 = number2;
        number2 = rest;
    } while (rest);

    this.numerator = (this.numerator / number1);
    this.denominator = (this.denominator / number1);
    return this;
};

/**
 * Multiply fraction
 * @param {Fraction} fraction - To multiply this fraction with
 */
Fraction.prototype.multiply = function (fraction) {

    if (!fraction instanceof Fraction) {
        throw new TypeError(TYPE_ERROR);
    }
    const answer = new Fraction();
    answer.numerator = this.numerator * fraction.numerator;
    answer.denominator = this.denominator * fraction.denominator;
    return answer.simplify();
};

/**
 * Calculate the sum of another fraction to this fraction
 * @param {Fraction} fraction - The fraction to add to this fraction
 */
Fraction.prototype.add = function (fraction) {

    if (!fraction instanceof Fraction) {
        throw new TypeError(TYPE_ERROR);
    }

    // Normalize fractions can be summed up
    const answer = new Fraction();
    answer.numerator = (this.numerator * fraction.denominator) + (fraction.numerator * this.denominator);
    answer.denominator = this.denominator * fraction.denominator;

    return answer.simplify();
}

/**
 * Substract a fraction
 * @param {Fraction} fraction - Fraction object which will be used to substract from ourselves
 */
Fraction.prototype.substract = function (fraction) {

    if (!fraction instanceof Fraction) {
        throw new TypeError(TYPE_ERROR);
    }

    // Normalize fractions can be substracte
    const answer = new Fraction();
    answer.numerator = (this.numerator * fraction.denominator) - (fraction.numerator * this.denominator);
    answer.denominator = this.denominator * fraction.denominator;
    return answer.simplify();
};

/**
 * Divide a fraction
 * @param {Fraction} fraction - Fraction to divide with
 */
Fraction.prototype.devide = function (fraction) {

    if (!fraction instanceof Fraction) {
        throw new TypeError(TYPE_ERROR);
    }

    const answer = new Fraction();
    answer.numerator = fraction.denominator;
    answer.denominator = fraction.numerator;

    return this.multiply(answer);
};

/**
 * @override
 */
Fraction.prototype.toString = function () {
    return `${this.numerator} / ${this.denominator}`;
};

module.exports = Fraction;
