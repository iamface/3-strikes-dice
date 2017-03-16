import Players from '../app/assets/js/Players';

describe('Player tests', ()=> {

    let names = ['John', 'Jim', 'Jane'];
    let players = new Players(names.length);

    // Count the players
    it('there are 3 players', ()=> {
        for (let i = 0; i < names.length; i++) {
            players.createPlayer(names[i]);
        }

        spyOn(players, 'players').and.returnValue(players);
        expect(players.players.length).toBe(names.length);
    });

    // Check the second player's name
    it(`the second player\'s name is Jim`, ()=> {
        expect(players.players[1].name).toBe(names[1]);
    });

});