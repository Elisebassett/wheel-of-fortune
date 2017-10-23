$(function () {
	if (Cookies.get('gameCount') === undefined) {
		Cookies.set('gameCount', 0);
	}//if
	class Game {
		constructor() {
			this.wordArray = [['A','P','P','L','E'], ['N','A','G','G','E','R']];
			this.word = null;
			this.game_count = parseInt(Cookies.get('gameCount'));
			this.letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			this.guessArray = [];
		}//constructor

		letsPlay() {
			let col = `<div class="col-1 grid"><img src="imgs/wheel_logo.png"></div>`;
			let end_row = `<div class="row">
				          <div class="col-1 grid end"></div>
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          <div class="col-1 grid end"></div>
				        </div> <!-- row -->`;
			let middle_row = `<div class="row">
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				          ${col}
				        </div> <!-- row -->`;

			if (this.game_count === 0) {
				$('#display').append(`
					<div class="container">
				        ${end_row}
				        <div class="row">
				        	${col}
				        	${col}
				          <div class="col-1 grid" data-letter="A"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="P"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="P"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="L"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="E"><img src="imgs/wheel_logo.png"></div>
				        	${col}
				        	${col}
				        	${col}
				        	${col}
				        	${col}
				        </div> <!-- row -->
				        ${middle_row}
				      	${end_row}
				      </div> <!-- container --> 
				`);//end game 0 append
			}//if game 0
			if (this.game_count === 1) {
				$('#display').append(`
					<div class="container">
				        ${end_row}
				        <div class="row">
				        	${col}
				        	${col}
				          <div class="col-1 grid" data-letter="N"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="A"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="G"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="G"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="E"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 grid" data-letter="R"><img src="imgs/wheel_logo.png"></div>
				        	${col}
				        	${col}
				        	${col}
				        	${col}
				        </div> <!-- row -->
				        ${middle_row}
				      	${end_row}
				      </div> <!-- container --> 
					`);//end game 1 append
				}//if game 1
				for (var i = 0; i < this.letterArray.length; i++) {
					$('#keyboard').append(`
						<div class="col">
							<button type="button" class="btn btn-outline-info key" id="${this.letterArray[i]}" data-letter="${this.letterArray[i]}">${this.letterArray[i]}</button>
						</div>
					`);//keyboard append
				} //for loop
				$('#guessInput').append(`
					<input type="text" id="guess" placeholder="Think you know what it is?">
					<button id="submit_guess">Guess</button>
				`);//guessInput
				for (var i = 0; i < this.letterArray.length; i++) {
					$('#keyboard').append(`
						<div class="col">
							<button type="button" class="btn btn-outline-info key" id="${this.letterArray[i]}" data-letter="${this.letterArray[i]}">${this.letterArray[i]}</button>
						</div>
					`);//keyboard append
				} //for loop
				$('#guessInput').append(`
					<input type="text" id="guess" placeholder="Think you know what it is?">
					<button id="submit_guess">Guess</button>
				`);//guessInput
			}//if game 0
		}//letsPlay


		guessLetter() {

		}//guessLetter

		checkGuess() {
			let guess = $('#guess').val().toUpperCase();
			this.word = this.wordArray[this.game_count].join('');
			console.log(this.word);
			// console.log(second_word);
			if (this.word === guess) {
				alert('You did the thing!');

			} else {
				alert('nope');

			}//if else
		}//checkGuess

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
		// Cookies.set('gameCount', this.game_count + 1);
	});
	$(document).on('click', '.key', function(){
		//make it so it compares stuff
		console.log('hey, I work!');
	});




























});