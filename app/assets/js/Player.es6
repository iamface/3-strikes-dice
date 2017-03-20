export default class Player {

    /**
     * Player
     *
     * @param name {String}
     */
    constructor(name) {
        this._name  = name;
        this._score = 0;
    }

    /**
     * Begin player's turn
     */
    takeTurn() {
        $(document).trigger('takeTurn');
    }

    /**
     * Returns the player's name
     *
     * @returns {*}
     */
    get name() {
        return this._name;
    }

    /**
     * Returns the player's score
     *
     * @returns {Number}
     */
    get score() {
        return this._score;
    }

    /**
     * Adds to the player's score
     *
     * @param add {Number}
     */
    set score(add) {
        this._score += add;
    }
}