window.onload = function() {

	// list of possible words
	var wordBank = ["computer", "program", "mouse", "keyboard", "javascript", "css", "html", "website"];
	
	var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; // randomly selects a word from wordBank

	// var randomWordArr = randomWord.split('');

	var wrongLettersArray = [];

	var rightLettersArray = [];

	var wrongGuess = 0;

	// console.log(randomWordArr);
	// for (var i = 0; i < randomWordArr.length; i++) {  //convert randomWord to undersores.
	// 	randomWordArr[i] = "_";
	// }

	// document.getElementById('word').innerHTML = randomWordArr.join(' ');


	console.log(randomWord);
	// console.log(randomWordArr);
	console.log(wrongGuess);
	console.log(wrongLettersArray);
	console.log(rightLettersArray);



	$('#submit').on('click', function() { // takes player input and compares to string
		var guessedLetter = $('#guessInput').val(); // to determin if there is a match

		if (!wrongLettersArray.includes(guessedLetter) && !rightLettersArray.includes(guessedLetter)){
			if (!randomWord.includes(guessedLetter)) {
				alert('INCORRECT');
				wrongGuess++;
				wrongLettersArray.push(guessedLetter);
				console.log(wrongGuess);
				console.log(wrongLettersArray);
				if (wrongGuess === 9) {
					alert('You are dead!');
				}
			}
			else {
				alert('CORRECT');
				// rightLettersArray.push(guessedLetter);
				for (var i = 0; i < randomWord.length; i++) {
					if (randomWord[i] === guessedLetter) {
						rightLettersArray.push(guessedLetter);
						console.log(rightLettersArray);
					}
				}
				// for (var i = 0; i < randomWordArr.length; i++) {
				// 	if(randomWord[i] === guessedLetter) {
				// 		randomWordArr[i] = guessedLetter + ' ';
				// 	}
				// }
				// for (var i = 0; i < randomWord.length; i++) {
				// 	for (var j = 0; j < rightLettersArray.length; j++) {
				// 		if (randomWord.includes(guessedLetter) && !rightLettersArray.includes(guessedLetter)) {
				// 			rightLettersArray.push(guessedLetter);
				// 			console.log(rightLettersArray);
				// 		}
				// 	}
				// }
				if (rightLettersArray.length === randomWord.length) {
					alert('You survived!');
				}
			}
		}
		else {
			alert('You have already guessed that letter');
		}
	});

};





