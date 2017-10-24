$(function () {
	// if (Cookies.get('gameCount') === undefined) {
	// 	Cookies.set('gameCount', 0);
	// }//if
	class Game {
		constructor() {
			this.wordArray = [['E','L','E','P','H','A','N','T','I','N','T','H','E','R','O','O','M'], ['N','A','G','G','E','R'],['O','B','S','T','E','P','E','R','O','U','S']];
			this.word = null;
			this.game_count = 0;
			// this.game_count = parseInt(Cookies.get('gameCount'));
			this.letterArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			this.gameArray = this.wordArray[this.game_count];
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
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
				          <div class="col-1 grid L" data-letter="L" id="letter"></div>
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
				          <div class="col-1 grid P" data-letter="P" id="letter"></div>
				          <div class="col-1 grid H" data-letter="H" id="letter"></div>
				          <div class="col-1 grid A" data-letter="A" id="letter"></div>
				          <div class="col-1 grid N" data-letter="N" id="letter"></div>
				          <div class="col-1 grid T" data-letter="T" id="letter"></div>
				        	${col}
				        	${col}
				        </div> <!-- row -->
				        <div class="row">
				        	${col}
				        	${col}
				          <div class="col-1 grid I" data-letter="I" id="letter"></div>
				          <div class="col-1 grid N" data-letter="N" id="letter"></div>
					        ${col}
				          <div class="col-1 grid T" data-letter="T" id="letter"></div>
				          <div class="col-1 grid H" data-letter="H" id="letter"></div>
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
					        ${col}
					        ${col}
				        	${col}
				        	${col}
				        </div> <!-- row -->
				      	<div class="row">
				      		<div class="col-1 grid end"></div>
				        	${col}
				        	<div class="col-1 grid R" data-letter="R" id="letter"></div>
				        	<div class="col-1 grid O" data-letter="O" id="letter"></div>
				        	<div class="col-1 grid O" data-letter="O" id="letter"></div>
				        	<div class="col-1 grid M" data-letter="M" id="letter"></div>
				        	${col}
				        	${col}
				        	${col}
				        	${col}
				        	${col}
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
				        	${col}
				        	${col}
				          <div class="col-1 grid N" data-letter="N" id="letter"></div>
				          <div class="col-1 grid A" data-letter="A" id="letter"></div>
				          <div class="col-1 grid G" data-letter="G" id="letter"></div>
				          <div class="col-1 grid G" data-letter="G" id="letter"></div>
				          <div class="col-1 grid E" data-letter="E" id="letter"></div>
				          <div class="col-1 grid R" data-letter="R" id="letter"></div>
				        	${col}
				        	${col}
				        	${col}
				        	${col}
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
				        	${col}
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
			for (var i = 0; i < this.letterArray.length; i++) {
				$('#keyboard').append(`
					<div class="col">
						<button type="button" class="btn btn-outline-info key" id="${this.letterArray[i]}" data-letter="${this.letterArray[i]}">${this.letterArray[i]}
						</button>
					</div>
				`);//keyboard append
			} //for loop
			$('#guessInput').append(`
				<input type="text" id="guess" placeholder="Think you know what it is?">
				<button id="submit_guess">Guess</button>
				<button id="hint_giver">Need a hint?</button>
			    <p id="hint"></p>
			`);//guessInput
		}//letsPlay


		guessLetter(letter) {
			// if (letter === 'A' || 'E' || 'I' || 'O' || 'U') {
			// 	prompt('would you like to buy a vowel?');
			// }//if buy a vowel
			
			if ($.inArray(letter, this.gameArray) > -1) {
				$(`.${letter}`).html(letter);

			} else {

				alert('nope! go fish');

			}//if else
	
			console.log(letter);

			console.log(this.gameArray);			
		}//guessLetter

		checkGuess() {
			let guess = $('#guess').val().toUpperCase().replace(/\s/g, '');
			this.word = this.wordArray[this.game_count].join('');
			console.log(this.word);
			// console.log(second_word);
			if (this.word === guess) {
				alert('You did the thing!');
				$('#display').html(`
					<button id='next'>Next Word!</button>
				`);//display
				$('#keyboard').html('');
				$('#guessInput').html('');
			} else {
				alert('nope');
			}//if else
		}//checkGuess
		
		hintGiver() {
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
			this.game_count = this.game_count +1;
			console.log(this.game_count);
		}//nextWord

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




























});