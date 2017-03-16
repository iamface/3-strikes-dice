import Die from './Die';

const numDice = 12;

export default class Dice {

    constructor() {
        this._dice = [];

        for (let i = 0; i < numDice; i++) {
            this._dice.push(new Die());
        }
    }

    get dice() {
        return this._dice;
    }
}