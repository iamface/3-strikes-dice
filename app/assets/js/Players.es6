import Player from './Player';

export default class Players {

    constructor(num) {
        this._numPlayers = num;
        this._players = [];
        this._whosTurn = 0;

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
        if (this._players.length == this._numPlayers) {
            window.console.log('max players already created!');
            window.console.log(this._players);
            return;
        }

        this._players.push(new Player(name));

        if (this._players.length < this._numPlayers) {
            $(document).trigger('showNewPlayerInput', {playerNum: this._players.length + 1});
        } else {
            window.console.log('all players created');
            window.console.log(this._players);
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

    get whosTurn() {
        return this._players[this._whosTurn];
    }
}