export default class Player {

    /**
     * Player
     *
     * @param name {String}
     */
    constructor(name) {
        this._name        = name;
        this._score       = 0;
        this._currentTurn = {};
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

    /**
     * Returns the player's current turn results
     *
     * @returns {Object}
     */
    get currentTurn() {
        return this._currentTurn;
    }

    /**
     * Records the player's current turn results
     *
     * @param type {String}
     */
    set currentTurn(type) {
        this._currentTurn[type] = (this._currentTurn[type]) ? this._currentTurn[type] + 1 : 1;
    }
}