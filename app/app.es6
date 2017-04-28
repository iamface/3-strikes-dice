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

    $('#roll_again').click(rollAgain);
    $('#end_turn').click(function() {
        endTurn(true);
    });
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
            // Hide roll button
            $('#take_turn').hide();

            // Grab 3 dice to roll
            let chosenDice = dice.pickDice(3);
            window.console.log(chosenDice);

            let rollResult = [];
            // Roll and show the result
            for (let i = 0; i < chosenDice.length; i++) {
                let dieResult = chosenDice[i].roll();
                window.console.log(dieResult);

                rollResult.push(dieResult);

                // Show result
                $('#roll_result').append(
                    `<div class="die-result"><svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><use xlink:href="./images/die.svg#die_${dieResult}"></use></svg></div>`
                );
            }

            currentPlayer.currentTurn = rollResult;
            evaluateTurn(currentPlayer);
        }
    });
    window.console.log(currentPlayer);

    currentPlayer.takeTurn();
}

function endTurn(recordScore) {
    let currentPlayer = players.whoseTurn;
    if (recordScore) {
        let dice = currentPlayer.currentTurn;

        let score = 0;
        for (let i = 0; i < dice.length; i++) {
            if (dice[i] === 'O') {
                score++;
            }
        }

        currentPlayer.score = score;

        window.console.log(currentPlayer);
    }

    window.console.log('player turn over..');
    currentPlayer.endTurn();
}

function rollAgain() {
    window.console.log('roll again..');
}

function evaluateTurn(currentPlayer) {
    let dice = currentPlayer.currentTurn;

    let strikes = 0;
    let points  = 0;
    let rerolls = 0;
    for (let i = 0; i < dice.length; i++) {
        switch (dice[i]) {
            case 'X':
                strikes++;
                break;
            case 'O':
                points++;
                break;
            case 'T':
                rerolls++;
                break;
        }
    }

    if (strikes >= 3) {
        endTurn(false);
        return;
    }

    if (rerolls === 0) {
        endTurn(true);
        return;
    }

    $('#roll_again, #end_turn').show();
}

/*************************************/

console.log(process.env.MY_VARIABLE);