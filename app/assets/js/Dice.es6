import Die from './Die';

/**
 * The current pool of dice
 *
 * @type {Array}
 */
// TODO build different difficulty levels - currently only 'easy'
const difficulty = [
    'easy', 'easy', 'easy', 'easy', 'easy', 'easy',
    'med', 'med', 'med',
    'hard', 'hard', 'hard'
];

export default class Dice {

    /**
     * Dice
     */
    constructor() {
        this._dice = [];

        for (let i = 0; i < difficulty.length; i++) {
            this._dice.push(new Die(difficulty[i]));
        }

        this._remainingDice = this._dice;
    }

    canPlay() {
        return this._remainingDice.length > 0;
    }

    pickDice() {
        window.console.log('choosing dice..');
        let remaining = this._remainingDice;
        let chosenDice = [];

        for (let i = 0; i < 3; i++) {
            let die = Math.floor(Math.random() * remaining.length);
            chosenDice.push(remaining[die]);

            remaining.splice(die, 1);
        }

        return chosenDice;
    }

    /**
     * Returns the dice
     *
     * @returns {Array}
     */
    get dice() {
        return this._dice;
    }

    /**
     * Returns the remaining dice pool
     *
     * @returns {Array}
     */
    get remainingDice() {
        return this._remainingDice;
    }
}