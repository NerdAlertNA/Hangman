window.onload = function() {

	var keyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
		'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
		'z', 'x', 'c', 'v', 'b', 'n', 'm']

	// list of possible words
	var wordBank = ["computer", "program", "mouse", "keyboard", "javascript", "css", "html", "website"];
	
	// the word to guess picked at random from wordBank
	var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	var wordToGuess = randomWord.split('');

	for (var i = 0; i < wordToGuess.length; i++) {
		wordToGuess[i] = '_';
	}
	
	var guessedLetters; // letters that have been guessed.
	


	// display the word in the game.
	document.getElementById("word").innerHTML = wordToGuess.join(' ');



}