export default class Player {

    /**
     * Player
     *
     * @param name {String} Display name of the player
     */
    constructor(name) {
        this._name  = name;
        this._score = 0;
        this._currentTurn = [];
    }

    /**
     * Begin player's turn
     */
    takeTurn() {
        $(document).trigger('takeTurn');
    }

    /**
     * Ends the player's turn
     */
    endTurn() {
        this._currentTurn = [];
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
     * @param num {Number} Amount to add to the player's current score
     */
    set score(num) {
        this._score += num;
    }

    /**
     * Returns the rolled dice from the current turn
     *
     * @returns {Array}
     */
    get currentTurn() {
        return this._currentTurn;
    }

    /**
     * Adds the latest roll to the current turn
     *
     * @param roll {Array} The result of the latest roll
     */
    set currentTurn(roll) {
        this._currentTurn = this._currentTurn.concat(roll);
    }
}