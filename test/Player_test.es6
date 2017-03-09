import Players from '../app/assets/js/Players';

describe('Player tests', ()=> {

    let names = ['John', 'Jim', 'Jane'];
    let players = new Players(names.length);

    // Count the players
    it('should count all players', ()=> {
        for (let i = 0; i < names.length; i++) {
            players.createPlayer(names[i]);
        }

        spyOn(players, 'players').and.returnValue(players);
        expect(players.players.length).toBe(names.length);
    });

    // Check the second player's name
    it(`should return ${names[1]} as the player\'s name`, ()=> {
        expect(players.players[1].name).toBe(names[1]);
    });

});