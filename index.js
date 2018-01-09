// make word array an object like this: {word: '', hint: ''}
// dynamically generate the html for the game board

$(function () {
	
	if (this.game_count === undefined) {
		$('#game-board').hide();
		$('#lets-play').html(`<button id="play" class="btn btn-primary">Let's Play!</button>`)

	}///Before the game starts

	class Game {
		constructor() {
			this.puzzle_words = [{word: 'Elephant in the room', hint: 'this is a hint'}, {word: 'naggers', hint: 'People who annoy you'}, {word: 'obstreperous', hint:'This is a hint'}]
			this.wordArray ;
			this.word = null;
			this.letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			this.game_count = null;
			this.playerA ;
			this.playerB ;
			this.spinCount = null;
			this.currentPlayer ; // extra
		}//constructor

		///////////////////In Object Functions/////////////////
		spinSetter() {
			this.spinCount = 0;
		}//spin setter
		
		wheelSpun() {
			this.spinCount = this.spinCount + 1;
		}//add a spin

		gameBoard() {
			$('#game-board').show();
			////////////Variables///////////
			this.wordArray = this.puzzle_words[this.game_count].word.toUpperCase().split('');
			//set checkArray for guessing letters
			this.checkArray = this.wordArray.filter(i => i !== ' ');
			let col = `<div class="col-1 grid"><img src="imgs/wheel_logo.png"></div>`;
			/////////////////////Board Game Generator///////////////////////////
			$('.bookend').html(`<div class="col-1 grid end"></div> ${col.repeat(10)} <div class="col-1 grid end"></div>`);
			$('#display').append(col);
			for (var i = 0; i < this.wordArray.length; i++) {
				if (i === 10) {
					$('#display').append(col.repeat(2));
				}
				if (this.wordArray[i] === " ") {
					$('#display').append(col);
				}
				else {
					$('#display').append(`<div class="col-1 grid ${this.wordArray[i]}" data-letter="${this.wordArray[i]}" id="letter"></div>`);
				}
			}//for loop to generate game board
			if (this.wordArray.length < 10 ) {
				$('#display').append(col.repeat(23-this.wordArray.length));
			} else {
				$('#display').append(col.repeat(21-this.wordArray.length));
			}
		}

		keyBoard() {
			$('#keyboard').html('');
			for (var i = 0; i < this.letterArray.length; i++) {
				$('#keyboard').append(`
					<div class="col">
						<button type="button" class="btn btn-amber key" id="${this.letterArray[i]}" data-letter="${this.letterArray[i]}">${this.letterArray[i]}</button>
					</div>
				`);//keyboard append
			} //for loop
			//Add Guess input and Hint button	
		}//Keyboard function

		coinModal() {
			$('#remote-container').html(`
					<div class="modal fade" id="coinModal" tabindex="-1" role="dialog" aria-hidden="true">
				    <div class="modal-dialog" role="document">
				        <div class="modal-content">
				        	<div class="modal-header">
		                <h5 class="modal-title coin-title">Let's see who goes first</h5>
			            </div>
			            <div class="coin-button">
					          <button id="coin" class="btn btn-danger">Click Me</button>  
			            </div>
				        </div>
				    </div>
				</div>`);
			$('#coinModal').modal('show');
		}//who's going first?

		///////////////////Functions//////////////////////////
		
		letsPlay() { ///This sets up the next puzzle
	    ////////////////Game Setter//////////////
			if (this.game_count === null) {
				this.game_count = 0;
				this.cash = 0;
				this.playerA = 1000;
				this.playerB = 1000;
			}//Game setter
			
			this.gameBoard();	
			this.keyBoard();
				
			/////////////////////End of Board Game Generation/////////////////////
			//Add Players
			if (this.game_count === 0) {
				this.nameA = prompt('Player 1, what\'s your name?');
				this.nameB = prompt('Player 2, what\'s your name?');
			}//customize
			$('#players').html(`
				<div class="col-4" id="player_a">
					<h3>${this.nameA}</h3>
					<div id=score>
						<div id="playerA">${this.playerA}</div>
					</div>
				</div>
		        <div id="turn" class="col-4"></div>
		        <div class="col-4" id="player_b">
					<h3>${this.nameB}</h3>
					<div id=score>
						<div id="playerB">${this.playerB}</div>
					</div>
		        </div>
			`);//player displays
			if (this.spinCount === null) {
				this.coinModal();
				console.log('there should be a remote container');
				$('#turn').html(`
					<button id="coin" class="btn btn-danger">Click me to see who goes first</button>
				`);
			} else {
				$('#gamePlay').html(`
					<button id="${this.spinner}" class="btn btn-success spinner">Spin The Wheel</button>
					<div id="value" class="spinner">$${this.cash}</div>
				`);//spinner	
			}//spin setter
		}//letsPlay


		guessLetter(letter) {
			if (this.spinner === undefined){
				alert('Flip a coin to see who goes first');
			} else {
				if (this.spinCount === null || this.spinCount === 0) {
					alert('Spin the wheel!')
				} else {
					// if (letter === 'A' || 'E' || 'I' || 'O' || 'U') {
					// 	prompt('would you like to buy a vowel?');
					// }//if buy a vowel
		
					if (this.checkArray.length > 0) {
						//if correct
						let letterCount = [];
						if ($.inArray(letter, this.checkArray) > -1) {
							$(`.${letter}`).html(letter);
							this.checkArray = $.grep(this.checkArray, function (a) {
								return a !== letter;
							});
							// letterCount = this.wordArray.filter(function(e){
							// 	e === letter});
							// console.log(letterCount);
							// console.log(letterCount.length);
							if (this.spinner === 'a_spinner') {
								this.playerA = this.playerA + this.cash;
								// this.playerA', this.playerA + this.cash*letterCount.length);
								$('#playerA').html(this.playerA);
								this.spinSetter();
							}//award PlayerA
							if (this.spinner === 'b_spinner'){
								this.playerB = this.playerB + this.cash;
								// this.playerB', this.playerB + this.cash*letterCount.length);
								$('#playerB').html(this.playerB);
								this.spinSetter();
							}//award PlayerB
						} //if Correct
						///else incorrect
						else {
							if (this.spinner === 'a_spinner' && this.spinCount === 1) {
								this.spinner = 'b_spinner';
								alert(`Nope! It\'s ${this.nameB}'s turn`);
								this.playerA = this.playerA - this.cash;
								$('#playerA').html(this.playerA);
								$('#turn').html(`${this.nameB}'s turn`);
								this.spinSetter();
							}
							if (this.spinner === 'b_spinner' && this.spinCount === 1) {
								this.spinner = 'a_spinner';
								alert(`Nope! It\'s ${this.nameA}'s turn`);
								this.playerB = this.playerB - this.cash;
								$('#playerB').html(this.playerB);
								$('#turn').html(`${this.nameA}'s turn`);
								this.spinSetter();
							}//turn change
						}//if else gameplay
					}//if game is still in play 
					if (this.checkArray.length === 0) {
						if (this.spinner === 'a_spinner') {
							alert(`${this.nameA} you did the thing!`);
							this.playerA = this.playerA + 1000;
						}//Player A Wins!
						if (this.spinner === 'b_spinner') {
							alert(`${this.nameB} you did the thing!`);
							this.playerB = this.playerB + 1000;
						}//Player A Wins!
						if (this.wordArray.length > 0) {
							$('#keyboard').html(`
								<div class="col">
								<button id='next' class="btn btn-amber">Next Word!</button>
								<div>
							`);//display
						}//nextgame if
						if (this.wordArray.length === 0) {
							$('#game').html('');
							if (this.playerA > this.playerB) {
								$('#turn').html(`<h1>${this.nameA} IS THE WINNER!!</h1>`);
							}///player A wins
							if (this.playerB > this.playerA) {
								$('#turn').html(`<h1>${this.nameB} IS THE WINNER!!</h1>`);
							}///player B wins
						}//winners
						$('#guessInput').html('');
					}//game win	
				}//did you spin?
			}///have you fliped yet?

			console.log(this.checkArray);

		}//guessLetter

		checkGuess() {
			if (this.spinner === undefined){
				alert('Flip a coin to see who goes first');
			} else {
				let guess = $('#guess').val().toUpperCase().replace(/\s/g, '');
				this.word = this.wordArray.replace(/\s/g, '');
				console.log(this.word);
				// console.log(second_word);
				if (this.word === guess) {
					if (this.spinner === 'a_spinner') {
						alert(`${this.nameA} you did the thing!`);
						this.playerA = this.playerA + 1000;
					}//Player A Wins!
					if (this.spinner === 'b_spinner') {
						alert(`${this.nameB} you did the thing!`);
						this.playerB = this.playerB + 1000;
					}//Player A Wins!
					if (this.wordArray.length > 0) {
						$('#keyboard').html(`
							<div class="col">
								<button id='next' class="btn btn-amber">Next Word!</button>
								<div>
						`);//display
					}//nextgame if
					if (this.wordArray.length === 0) {
						$('#game').html('');
						if (this.playerA > this.playerB) {
							$('#turn').html(`<h1>${this.nameA} IS THE WINNER!!</h1>`);
						}///player A wins
						if (this.playerB > this.playerA) {
							$('#turn').html(`<h1>${this.nameB} IS THE WINNER!!</h1>`);
						}///player B wins
					}//winners
					
				} else {
					alert('nope');
				}//if else
			}//has the game begun?
		}//checkGuess
		
		hintGiver() {
		/////turn into an array
			$('#hint').html(`<h5 class="h5-responsive hint">${this.puzzle_words[this.game_count].hint}</h5>`);
		}//hintGiver

		nextWord() {
			$('#display').html('');
			$('#guessInput').html('');
			this.game_count = this.game_count +1;
			this.checkArray = undefined;
		}//nextWord

		getValue() {
      if (this.spinCount === 1) {} 
      else {
        this.cashValues = [5000, 600, 500, 300, 500, 800, 550, 400, 300, 900, 500, 300, 900, 0, 600, 400, 300, 800, 350, 450, 700, 300, 600, 'Bankrupt'];
				this.cash = this.cashValues[Math.floor(Math.random()*this.cashValues.length)];
				if (this.cash === 'Bankrupt') {
					this.cash = 0;
					if (this.spinner === 'a_spinner') {
					this.playerA = 0;
					}//playerA
					if (this.spinner === 'b_spinner') {
					this.playerB = 0;
					}//playerB
				}//bankrupt if
				else {
					$('#value').html(`$${this.cash}`);
				}//add cash		
			}///has the wheel been spun already?
		}//spin the wheel

		coinFlip() {
			let spinnerArray = ['a_spinner', 'b_spinner'];
			let spinner = spinnerArray[Math.floor(Math.random()*spinnerArray.length)];
			this.spinner = spinner;
			console.log(spinner);
			if (spinner === 'a_spinner') {
				$('#turn,.coin-title').html(`${this.nameA} goes first!`);
			} else {
				$('#turn,.coin-title').html(`${this.nameB} goes first!`);
			}//alert
			$('.coin-button').html('<button class="btn btn-danger modal-close">Close</button>');
			$('#gamePlay').html(`
				<button id="${this.spinner}" class="btn btn-success spinner">Spin The Wheel</button>
				<div id="value" class="spinner">$${this.cash}</div>
			`);//spinner
		}//coin Flip
	}//Game

	var wheel = new Game();

	////////////////Click Events////////////////////////
	///Guess///
	$(document).on('click', '#submit_guess', function(){
		wheel.checkGuess();
	});
	////Play Button////
	$(document).on('click', '#play', function(){
		wheel.letsPlay();
		$('#play').hide();
	});
	////letter guesser///
	$(document).on('click', '.key', function(){
		let letter = $(this).data('letter');
		wheel.guessLetter(letter);
	});
	////hint giver////
	$(document).on('click', '#hint_giver', function() {
		wheel.hintGiver();
	});
	///next word////
	$(document).on('click', '#next', function() {
		wheel.nextWord();
		wheel.letsPlay();
	});
	////spin the wheel////
	$(document).on('click', '#a_spinner', function() {
		wheel.getValue();
		wheel.wheelSpun();
	});
	$(document).on('click', '#b_spinner', function() {
		wheel.getValue();
		wheel.wheelSpun();
	});
	//////coin flip/////
	$(document).on('click', '#coin', function() {
		wheel.coinFlip();
	});
	//////modal trigger///////
	$(document).on('click', '.modal-close', function() {
		$('.modal').modal('hide');
	});





















});