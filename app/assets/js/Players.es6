import Player from './Player';

export default class Players {

    /**
     * Players
     *
     * @param num {Number}
     */
    constructor(num) {
        this._numPlayers = num;
        this._players = [];
        this._whoseTurn = 0;

        Players._createPlayers();
    }

    /**
     * Create the first player
     *
     * @private
     */
    static _createPlayers() {
        $(document).trigger('showNewPlayerInput', {playerNum: 1});
    }

    /**
     * Create player
     *
     * @param name {String}
     */
    createPlayer(name) {
        // Max players already created
        if (this._players.length == this._numPlayers) {
            window.console.log('max players already created!', this._players);
            return;
        }

        // Create new player and add to players array
        this._players.push(new Player(name));

        // More players need to be created
        if (this._players.length < this._numPlayers) {
            $(document).trigger('showNewPlayerInput', {playerNum: this._players.length + 1});
        } else {
            window.console.log('all players created', this._players);
            $(document).trigger('allPlayersCreated');
        }
    }

    /**
     * Return players
     *
     * @returns {Array}
     */
    get players() {
        return this._players;
    }

    /**
     * Returns the player whose current turn it is
     *
     * @returns {Player}
     */
    get whoseTurn() {
        return this._players[this._whoseTurn];
    }
}