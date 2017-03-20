const strike   = 'X';
const point    = 'O';
const tryAgain = 'T';

const easy = [point, point, point, tryAgain, tryAgain, strike];   // O,O,O,T,T,X
const med  = [point, point, tryAgain, tryAgain, strike, strike];  // O,O,T,T,X,X
const hard = [point, tryAgain, tryAgain, strike, strike, strike]; // O,T,T,X,X,X

const types = {
    easy: easy,
    med: med,
    hard: hard
};

export default class Die {

    /**
     * Die
     *
     * @param type {String}
     */
    constructor(type) {
        this._sides = types[type];
        this._type  = type;
    }

    /**
     * Returns the sides of the die
     *
     * @returns {Array}
     */
    get sides() {
        return this._sides;
    }

    /**
     * Roll the die
     *
     * @returns {String}
     */
    roll() {
        let sides = this._sides;

        return sides[Math.floor(Math.random() * sides.length)];
    }
}