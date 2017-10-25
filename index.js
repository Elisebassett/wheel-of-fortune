$(function () {

	class Game {
		constructor() {
			///turn into an array of words hint: split()
			this.wordArray = [['E','L','E','P','H','A','N','T','I','N','T','H','E','R','O','O','M'], ['N','A','G','G','E','R'],['O','B','S','T','R','E','P','E','R','O','U','S']];
			this.word = null;
			this.letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			this.game_count = null;
			this.gameArray = [];
			this.failCountA ;
			this.failCountB ;
			this.playerA ;
			this.playerB ;
			this.spinCount = null;
		}//constructor


		///////////////////In Object Functions/////////////////

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
						<button type="button" class="btn btn-outline-info key" id="${this.letterArray[i]}" data-letter="${this.letterArray[i]}">${this.letterArray[i]}
						</button>
					</div>
				`);//keyboard append
			} //for loop
			//Add Guess input and Hint button
			$('#guessInput').append(`
				<input type="text" id="guess" placeholder="Think you know what it is?">
				<button id="submit_guess">Solve the puzzle</button>
				<button id="hint_giver">Need a hint?</button>
			    <p id="hint"></p>
			`);//guessInput
			//Add Player A
			if (this.spinCount === null) {
				$('#turn').html(`
					<button id="coin">Flip me</button>
				`);
			} else {
				$('#gamePlay').html(`
					<button id="${this.spinner}" class="spinner">Spin The Wheel</button>
					<div id="value" class="spinner">$${this.cash}</div>
				`);//spinner	
			}//spin setter

			if (this.game_count === 0) {
				this.nameA = prompt('What\'s your name?');
				this.nameB = prompt('What\'s your name?');
			}//customize

			$('#player_a').html(`
				<h3>${this.nameA}</h3>
				<div id=score>
					<div id="playerA">${this.playerA}</div>
				</div>
			`);//playerone display

			//Add Player B
			$('#player_b').html(`
				<h3>${this.nameB}</h3>
				<div id=score>
					<div id="playerB">${this.playerB}</div>
				</div>
			`);//playerone display

		}//letsPlay


		guessLetter(letter) {
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
					}
					if (this.spinner === 'b_spinner'){
						this.playerB = this.playerB + this.cash;
						// this.playerB', this.playerB + this.cash*letterCount.length);
						$('#playerB').html(this.playerB);
					}//award money
				} //if Correct
				///else incorrect
				else {
					if (this.spinner === 'a_spinner') {
						this.spinner = 'b_spinner';
						alert(`Nope! It\'s ${this.nameB}/'s turn`);
						this.failCountA = this.failCountA +1;
						this.playerA = this.playerA - this.cash;
						$('#playerA').html(this.playerA);
						$('#turn').html(`${this.nameB}/'s turn`);
					}
					if (this.spinner === 'b_spinner'){
						this.spinner = 'a_spinner';
						alert(`Nope! It\'s ${this.nameA}/'s turn`);
						this.failCountB = this.failCountB +1;
						this.playerB = this.playerB - this.cash;
						$('#playerB').html(this.playerB);
						$('#turn').html(`${this.nameA}/'s turn`);
					}//turn change
				}//if else gameplay
			}//if game is still in play 
			if (this.checkArray.length === 0) {
				alert('WINNER WINNER CHICKEN DINNER!!!');
				if (this.wordArray.length > 0) {
					$('#keyboard').html(`
						<button id='next'>Next Word!</button>
					`);//display
				}//nextgame if
				$('#guessInput').html('');
			}//game win	


		}//guessLetter

		checkGuess() {
			let guess = $('#guess').val().toUpperCase().replace(/\s/g, '');
			this.word = this.gameArray.join('');
			console.log(this.word);
			// console.log(second_word);
			if (this.word === guess) {
				alert('You did the thing!');
				if (this.wordArray.length > 0) {
					$('#keyboard').html(`
						<button id='next'>Next Word!</button>
					`);//display
				}//nextgame if
				$('#guessInput').html('');
			} else {
				alert('nope');
			}//if else
		}//checkGuess
		
		hintGiver() {
		/////turn into an array
			if (this.game_count === 0) {
				$('#hint').html('Easily seen, easily ignored.');
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

			this.game_count = this.game_count +1;
			this.checkArray = undefined;

		}//nextWord

		spinWheel() {
	        this.cashValues = [5000, 600, 500, 300, 500, 800, 550, 400, 300, 900, 500, 300, 900, 0, 600, 400, 300, -2, 800, 350, 450, 700, 300, 600, 'Bankrupt'];
			this.cash = this.cashValues[Math.floor(Math.random()*this.cashValues.length)];
			console.log(this.cash);
			$('#value').html(`$${this.cash}`);
		}//spin the wheel
	
		aSpinner() {
			if (this.cash === 'Bankrupt') {
				this.playerA = 0;
			}//bankrupt if
		}//a spinner
	
		bSpinner() {
			if (this.cash === 'Bankrupt') {
				this.playerB = 0;
			}//bankrupt if
		}//b spinner
		coinFlip() {
			let spinnerArray = ['a_spinner', 'b_spinner'];
			let spinner = spinnerArray[Math.floor(Math.random()*spinnerArray.length)];
			this.spinner = spinner;
			console.log(spinner);
			if (spinner === 'a_spinner') {
				$('#turn').html(`${this.nameA} goes first!`);
			} else {
				$('#turn').html(`${this.nameB} goes first!`);
			}//alert
			$('#gamePlay').html(`
				<button id="${this.spinner}" class="spinner">Spin The Wheel</button>
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
		wheel.spinWheel();
		wheel.aSpinner();
	});
	$(document).on('click', '#b_spinner', function() {
		wheel.spinWheel();
		wheel.bSpinner();
	});
	//////coin flip/////
	$(document).on('click', '#coin', function() {
		wheel.coinFlip();
	});





















});