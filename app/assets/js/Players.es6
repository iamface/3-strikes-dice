import Player from './Player';

export default class Players {

    constructor(names) {

        this._players = [];

        for (let i = 0; i < names.length; i++) {
            this._players.push(new Player(names[i]));
        }
    }

    get players() {
        return this._players;
    }
}