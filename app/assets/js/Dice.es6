import Die from './Die';

const difficulty = [
    'easy', 'easy', 'easy', 'easy', 'easy', 'easy',
    'med', 'med', 'med',
    'hard', 'hard', 'hard'
];

export default class Dice {

    constructor() {
        this._dice = [];

        for (let i = 0; i < difficulty.length; i++) {
            this._dice.push(new Die(difficulty[i]));
        }
    }

    get dice() {
        return this._dice;
    }
}