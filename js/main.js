window.onload = function() {

	var keyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
		'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
		'z', 'x', 'c', 'v', 'b', 'n', 'm']

	// list of possible words
	var wordBank = ["computer", "program", "mouse", "keyboard", "javascript", "css", "html", "website"];
	
	// the word to guess
	var word = wordBank[Math.floor(Math.random() * wordBank.length)];
	
	var guessedLetters; // letters that have been guessed.
	var blankSpaces // blank spaces to be filled by correct answers.

}