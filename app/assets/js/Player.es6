export default class Player {

    constructor(name) {
        this._name  = name;
        this._score = 0;
    }

    takeTurn() {
        $(document).trigger('takeTurn');
    }

    get name() {
        return this._name;
    }

    get score() {
        return this._score;
    }

    set score(add) {
        this._score += add;
    }
}