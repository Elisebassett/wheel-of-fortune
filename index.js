$(function () {

	class Game {
		constructor() {
			this.wordArray = [['a','p','p','l','e'], ['n','a','g','g','e','r']];

			
		}//constructor

		letsPlay() {

		}//letsPlay

		guessLetter() {

		}//guessLetter

		checkGuessOne() {
			let guess = $('#guess').val();
			// var word = [this.wordArray.shift()].join('');
			var first_word = this.wordArray[0].join('');
			// var second_word = this.wordArray[1].join('');
			// console.log(word);
			console.log(first_word);
			// console.log(second_word);
			if (first_word === guess) {
				alert('You did the thing!');

			} else {
				alert('nope')

			}//if else
		}//checkGuessOne

	}//Game

	var wheel = new Game();
	$(document).on('click', '#submit_guess', function(){
		wheel.checkGuessOne();
	});


































});