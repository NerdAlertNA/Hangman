window.onload = function() {

	// list of possible words
	var wordBank = ["computer", "program", "mouse", "keyboard", "javascript", "css", "html", "website"];
	
	var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; // randomly selects a word from wordBank

	var wrongGuess = 0;

	// var wordToGuessSplit = randomWord.split(''); // splits the chosen word into a new array	
	console.log(randomWord);



	$('#submit').on('click', function() { // takes player input and compares to string
		var guessedLetter = $('#guessInput').val(); // to determin if there is a match
		if (!randomWord.includes(guessedLetter)) {
			alert('INCORRECT');
			wrongGuess++;
			console.log(wrongGuess);
			if (wrongGuess === 9) {
				alert('You are dead!');
			}
		}
		else {
			alert('CORRECT');
		}
	});

};





