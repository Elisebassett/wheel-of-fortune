$(function () {

	class Game {
		constructor() {
			///turn into an array of words hint: split()
			this.wordArray = [['E','L','E','P','H','A','N','T','I','N','T','H','E','R','O','O','M'], ['N','A','G','G','E','R'],['O','B','S','T','R','E','P','E','R','O','U','S']];
			this.word = null;
			this.letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			this.game_count = null;
			this.gameArray = [];
			this.playerA ;
			this.playerB ;
			this.spinCount = null;
		}//constructor


		///////////////////In Object Functions/////////////////
		spinSetter() {
			this.spinCount = 0;
			console.log(this.spinCount);
		}//spin setter
		wheelSpun() {
			this.spinCount = this.spinCount + 1;
		}//add a spin
		///////////////////Functions//////////////////////////
		letsPlay() { 
			////////////Variables///////////
			this.gameArray = this.wordArray.shift();
			let col = `<div class="col-1 grid"><img src="imgs/wheel_logo.png"></div>`;
			let end_row = `
				<div class="row">
		          <div class="col-1 grid end"></div>
		          ${col} ${col} ${col} ${col} ${col} ${col} ${col} ${col} ${col} ${col}
		          <div class="col-1 grid end"></div>
		        </div> <!-- row -->
	        `;//end row
			let middle_row = `
				<div class="row">
		          ${col} ${col} ${col} ${col} ${col} ${col} ${col} ${col} ${col} ${col} ${col} ${col}
		        </div> <!-- row -->
		     `;//middle row

	     	//////////////Game Setter//////////////
			if (this.game_count === null) {
				this.game_count = 0;
				this.cash = 0;
				this.playerA = 1000;
				this.playerB = 1000;
			}//Game setter
			$('#display').html('');
			////////////////Conditional Game Displays/////////////////////
///HTML cleanup idea - put elephant in the room in a 2D array use that to separate and populate divs////

			if (this.game_count === 0) {
				$('#display').append(`
					<div class="container">
				        ${end_row}
				        <div class="row">
				        	${col}
				        	${col}
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
				          <div class="col-1 grid L" data-letter="L" id="letter"></div>
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
				          <div class="col-1 grid P" data-letter="P" id="letter"></div>
				          <div class="col-1 grid H" data-letter="H" id="letter"></div>
				          <div class="col-1 grid A" data-letter="A" id="letter"></div>
				          <div class="col-1 grid N" data-letter="N" id="letter"></div>
				          <div class="col-1 grid T" data-letter="T" id="letter"></div>
				        	${col} ${col}
				        </div> <!-- row -->
				        <div class="row">
				        	${col} ${col}
				          <div class="col-1 grid I" data-letter="I" id="letter"></div>
				          <div class="col-1 grid N" data-letter="N" id="letter"></div>
					        ${col}
				          <div class="col-1 grid T" data-letter="T" id="letter"></div>
				          <div class="col-1 grid H" data-letter="H" id="letter"></div>
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
					        ${col} ${col} ${col} ${col}
				        </div> <!-- row -->
				      	<div class="row">
				      		<div class="col-1 grid end"></div>
				        	${col}
				        	<div class="col-1 grid R" data-letter="R" id="letter"></div>
				        	<div class="col-1 grid O" data-letter="O" id="letter"></div>
				        	<div class="col-1 grid O" data-letter="O" id="letter"></div>
				        	<div class="col-1 grid M" data-letter="M" id="letter"></div>
				        	${col} ${col} ${col} ${col} ${col}
					        <div class="col-1 grid end"></div>
					    </div> <!-- row -->
				      </div> <!-- container --> 
				`);//end game 0 append
			}//if game 0
			if (this.game_count === 1) {
				$('#display').append(`
					<div class="container">
				        ${end_row}
				        <div class="row">
				        	${col} ${col}
				          <div class="col-1 grid N" data-letter="N" id="letter"></div>
				          <div class="col-1 grid A" data-letter="A" id="letter"></div>
				          <div class="col-1 grid G" data-letter="G" id="letter"></div>
				          <div class="col-1 grid G" data-letter="G" id="letter"></div>
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
				          <div class="col-1 grid R" data-letter="R" id="letter"></div>
				        	${col} ${col} ${col} ${col}
				        </div> <!-- row -->
				        ${middle_row}
				      	${end_row}
				      </div> <!-- container --> 
					`);//end game 0 append
				}//if game 1
				if (this.game_count === 2) {
				$('#display').append(`
					<div class="container">
				        ${end_row}
				        <div class="row">
				          <div class="col-1 grid O" data-letter="O" id="letter"></div>
				          <div class="col-1 grid B" data-letter="B" id="letter"></div>
				          <div class="col-1 grid S" data-letter="S" id="letter"></div>
				          <div class="col-1 grid T" data-letter="T" id="letter"></div>
				          <div class="col-1 grid R" data-letter="R" id="letter"></div>
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
				          <div class="col-1 grid P" data-letter="P" id="letter"></div>
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
				          <div class="col-1 grid R" data-letter="R" id="letter"></div>
				          <div class="col-1 grid O" data-letter="O" id="letter"></div>
				          <div class="col-1 grid U" data-letter="U" id="letter"></div>
				          <div class="col-1 grid S" data-letter="S" id="letter"></div>
				        </div> <!-- row -->
				        ${middle_row}
				      	${end_row}
				      </div> <!-- container --> 
					`);//end game 0 append
				}//if game 2
				
			/////////////////////End of game conditional appends/////////////////////
			//Add Keyboard
			$('#keyboard').html('');
			for (var i = 0; i < this.letterArray.length; i++) {
				$('#keyboard').append(`
					<div class="col">
						<button type="button" class="btn btn-amber key" id="${this.letterArray[i]}" data-letter="${this.letterArray[i]}">${this.letterArray[i]}
						</button>
					</div>
				`);//keyboard append
			} //for loop
			//Add Guess input and Hint button
			$('#guessInput').append(`
				<input type="text" id="guess" placeholder="Think you know what it is?">
				<button id="submit_guess" class="btn btn-mdb btn-lrg">Solve the puzzle</button>
				<button id="hint_giver" class="btn btn-pink btn lrg">Need a hint?</button>
			    <p id="hint"></p>
			`);//guessInput
			//Add Players
			if (this.game_count === 0) {
				this.nameA = prompt('What\'s your name?');
				this.nameB = prompt('What\'s your name?');
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
				$('#turn').html(`
					<button id="coin" class="btn btn-danger flipOutX">Flip me</button>
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
					if (this.checkArray === undefined) {
						this.checkArray = this.gameArray;
					}//set checkArray
		
					if (this.checkArray.length > 0) {
						//if correct
						let letterCount = [];
						if ($.inArray(letter, this.checkArray) > -1) {
							$(`.${letter}`).html(letter);
							this.checkArray = $.grep(this.checkArray, function (a) {
								return a !== letter;
							});
							// letterCount = this.gameArray.filter(function(e){
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
			console.log(this.spinCount);
		}//guessLetter

		checkGuess() {
			if (this.spinner === undefined){
				alert('Flip a coin to see who goes first');
			} else {
				let guess = $('#guess').val().toUpperCase().replace(/\s/g, '');
				this.word = this.gameArray.join('');
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
			if (this.game_count === 0) {
				$('#hint').html('<h5 class="h5-responsive hint">Easily seen, easily ignored.</h5>');
			}//if game 0
			if (this.game_count === 1) {
				$('#hint').html('Are you a fan of South Park?');
			}// if game 1
			if (this.game_count === 2) {
				$('#hint').html('An extremely pretentious word for "loud" and "noisy"');
			}// if game 2
		}//hintGiver

		nextWord() {
			$('#display').html('');
			$('#guessInput').html('');
			this.game_count = this.game_count +1;
			this.checkArray = undefined;
			console.log(this.spinCount);
		}//nextWord

		getValue() {
	        if (this.spinCount === 1) {

	        } else {
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
			if (spinner === 'a_spinner') {
				$('#turn').html(`${this.nameA} goes first!`);
			} else {
				$('#turn').html(`${this.nameB} goes first!`);
			}//alert
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





















});