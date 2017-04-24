/*jshint esversion: 6 */

// Include CSS to be compiled
require('./assets/css/app.scss');

import Players from './assets/js/Players';
import Dice from './assets/js/Dice';

/*************************************/
/* Events */

$(document).ready( ()=> {
    // New Game clicked
    $('#new_game_btn').click(createNewGame);

    // Number of players chosen
    $('.choose-num-player').click( e => {
        $('#choose_num_players').hide();

        players = new Players($(e.target).text());
    });

    // Show player name input
    $(document).on('showNewPlayerInput', (e, player) => {
        $('#player_name_enter').text(player.playerNum);
        $('#player_name_input').val('').attr('placeholder', 'Player '+ player.playerNum);
        $('#player_name_div').show();
    });

    // Player name saved
    $('#player_name_save').click( ()=> {
        let input = $('#player_name_input');
        let name = (!input.val()) ? input.attr('placeholder') : input.val();
        
        players.createPlayer(name);
    });

    // Player creation complete
    $(document).on('allPlayersCreated', ()=> {
        // Remove events after all players have been created
        $(document).off('allPlayersCreated');
        $(document).on('showNewPlayerInput');

        $('#player_name_div').hide();

        createDice();
        startGame();
    });

    // Event from Player
    $('#take_turn').click(takeTurn);
});

/*************************************/

let players;
let dice;

/**
 * Create a new game
 */
function createNewGame() {
    $('#new_game_btn').hide();

    $('#choose_num_players').show();
    window.console.log('new game initialized..');
}

/**
 * Create the dice
 */
function createDice() {
    dice = new Dice();
}

/**
 * Start the game
 */
function startGame() {
    $('#header').show();

    $('#player_name').text(players.whoseTurn.name);
    $('#player_turn').show();

    showHeader();
}

/**
 * Show score header
 */
function showHeader() {
    $('#header_scores').empty();

    $(players.players).each(function () {
        $('#header_scores').append(
            `<div>${this.name} : ${this.score}</div>`
        );
    });

    $('#header').show();
}

/**
 * Take a turn
 */
function takeTurn() {
    let currentPlayer = players.whoseTurn;
    $(document).on('takeTurn', function() {
        $(document).off('takeTurn');
        window.console.log(`${dice.remainingDice.length} dice remaining.`, dice.remainingDice);

        if (dice.canPlay()) {
            let chosenDice = dice.pickDice();
            window.console.log(chosenDice);

            for (let i = 0; i < chosenDice.length; i++) {
                let rollResult = chosenDice[i].roll();
                currentPlayer.currentTurn = rollResult;

                $('#roll_result').append(
                    `<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><use xlink:href="./images/die.svg#die_${rollResult}"></use></svg>`
                );
            }
        }
    });
    window.console.log(currentPlayer);

    currentPlayer.takeTurn();
}

/*************************************/

console.log(process.env.MY_VARIABLE);