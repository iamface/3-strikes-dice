/*jshint esversion: 6 */

// Include CSS to be compiled
require('./assets/css/app.scss');

import Players from './assets/js/Players';
import Dice from './assets/js/Dice';

/*************************************/
/* Events */

$(document).ready( ()=> {
    // New Game clicked
    $('#new_game_btn').click( ()=> createNewGame() );

    // Number of players chosen
    $('.choose-num-player').click( e => {
        $('#choose_num_players').hide();

        players = new Players($(e.target).text());
    });

    // Show player name input
    $(document).on('showNewPlayerInput', (e, player) => {
        $('#player_name_input').val('').attr('placeholder', 'Player '+ player.playerNum);
        $('#player_name_div').show();
    });

    // Player name saved
    $('#player_name_save').click( ()=> {players.createPlayer($('#player_name_input').val())});

    // Player creation complete
    $(document).on('allPlayersCreated', ()=> {
        $('#player_name_div').hide();

        createDice();
    } );
});

/*************************************/

let players;
let dice;

function createNewGame() {
    $('#new_game_btn').hide();

    $('#choose_num_players').show();
    window.console.log('new game initialized..');
}

function createDice() {
    dice = new Dice();

    window.console.log(dice);
    window.console.log(dice.dice[0].sides);
    window.console.log(dice.dice[0].roll());
}

/*************************************/

console.log(process.env.MY_VARIABLE);