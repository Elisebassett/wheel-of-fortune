$(function () {
	if (Cookies.get('gameCount') === undefined) {
		Cookies.set('gameCount', 0);
	}//if
	class Game {
		constructor() {
			this.wordArray = [['a','p','p','l','e'], ['n','a','g','g','e','r']];
			this.word = null;
			this.game_count = parseInt(Cookies.get('gameCount'));
		}//constructor

		letsPlay() {
			if (this.game_count === 0) {
				$('#display').html(`
					<div class="container">
				        <div class="row">
				          <div class="col-1 end"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 end"></div>
				        </div> <!-- row -->
				        <div class="row">
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 a" data-letter="a"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 p" data-letter="p"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 p" data-letter="p"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 l" data-letter="l"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 e" data-letter="e"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				        </div> <!-- row -->
				        <div class="row">
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				        </div> <!-- row -->
				        <div class="row">
				          <div class="col-1 end"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1"><img src="imgs/wheel_logo.png"></div>
				          <div class="col-1 end"></div>
				        </div> <!-- row -->
				      </div> <!-- container --> 
				`);//end game 0 append
			}//if game 0

		}//letsPlay

		guessLetter() {

		}//guessLetter

		checkGuess() {
			let guess = $('#guess').val();
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






























});