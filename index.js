$(function () {

	class Game {
		constructor() {
			this.wordArray = ['a','p','p','l','e'];

			
		}//constructor

		guessLetter() {

		}

		checkGuess() {
			let guess = $('#guess').val();
			var word = this.wordArray.join('');
			console.log(word);
			if (word === guess) {
				alert('You did the thing!');

			} else {

			}//if else
		}//checkGuess

	}//Game

	var wheel = new Game();
	$('#submit_guess').click(wheel.checkGuess());


































});