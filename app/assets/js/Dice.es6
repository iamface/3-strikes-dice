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

        this._remainingDice = this._dice;
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

    get dice() {
        return this._dice;
    }

    get remainingDice() {
        return this._remainingDice;
    }
}