window.onload = function() {

	var keyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
		'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
		'z', 'x', 'c', 'v', 'b', 'n', 'm']

	// list of possible words
	var wordBank = ["computer", "program", "mouse", "keyboard", "javascript", "css", "html", "website"];
	
	var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; // Randomly selects a word from wordBank
	
	var wordToGuess = randomWord.split(''); // splits the chosen word into a new array

	for (var i = 0; i < wordToGuess.length; i++) { // replaces the word to be displayed with underscores
		wordToGuess[i] = '_';
	}
	
	var guessedLetters; // letters that have been guessed.
	


	
	document.getElementById("word").innerHTML = wordToGuess.join(' ');// display the word in the game.



}