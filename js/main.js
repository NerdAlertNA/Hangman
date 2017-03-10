window.onload = function() {

	// list of possible words
	var wordBank = ["computer", "program", "mouse", "keyboard", "javascript", "css", "html", "website"];
	
	var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; // randomly selects a word from wordBank

	var underscores = [];

	for (var i = 0; i < randomWord.length; i++) {
		underscores.push('_ ');
	}

	var wrongLettersArray = [];

	var rightLettersArray = [];

	var wrongGuess = 0;

	console.log(randomWord);
	console.log(wrongGuess);
	console.log(wrongLettersArray);
	console.log(rightLettersArray);

	$('#word').append(underscores);

	$('#submit').on('click', function() { // takes player input and compares to string
		var guessedLetter = $('#guessInput').val(); // to determin if there is a match

		if (!wrongLettersArray.includes(guessedLetter) && !rightLettersArray.includes(guessedLetter)){ // checks if letter has been guessed
			if (!randomWord.includes(guessedLetter)) {
				alert('INCORRECT');						 // if guess is guess is wrong
				wrongGuess++;							 // alert "INCORRECT"
				wrongLettersArray.push(guessedLetter);	 // and add letter to the incorrect guess array
				console.log(wrongGuess);
				console.log(wrongLettersArray);
				$('#incorrect').append(guessedLetter);
				if (wrongGuess === 9) {					// if you guess wrong 9 times you lose.
					alert('You are dead!');
				}
			}
			else {
                alert('CORRECT');
                for (var i = 0; i < randomWord.length; i++) {    // cycles through each letter of the current word
                    if (randomWord[i] === guessedLetter) {      // and if a match is found
                        rightLettersArray.push(guessedLetter);  // adds the letter to the correct guess array
                        underscores[i] = guessedLetter;
                        console.log(underscores);
                    }
                }
                $('#word').empty();
                $('#word').append(underscores);
                if (rightLettersArray.length === randomWord.length) {   // if .length of array === .length of word
                    alert('You survived!');                             // alert "You survived!"
                }
            }
		}
		else {
			alert('You have already guessed that letter'); // if letter has been guess display this
		}
	});

	$('#incorrect').append(wrongLettersArray);
	$('#correct').append(rightLettersArray);

};




// for(var i = 0; i < randomWord.length; i++) {
//     if (randomWord[i] === guessedLettter) {
//     //   console.log(word[i].indexOf(choice));
//       underscores[i] = guessedLetter;
//     //   console.log(arr);
//     }
// }

// console.log(underscores);


