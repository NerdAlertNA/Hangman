window.onload = function() {

	// list of possible words
	var wordBank = ["computer", "program", "mouse", "keyboard", "javascript", "css", "html", "website"];
	
	var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; // randomly selects a word from wordBank

	var wordToGuessSplit = randomWord.split(''); // splits the chosen word into a new array	

	var wordToGuess = new Array(wordToGuessSplit.length);
	

	console.log(randomWord);
	console.log(wordToGuessSplit);
	console.log(wordToGuess);

	for (var i = 0; i < wordToGuess.length; i++) {
		wordToGuess[i] = '_ ';
	}

	console.log(wordToGuess);
// GIVEN I am on the game page
// WHEN I type a letter 
// AND the letter is not in the word
// THEN display a message "INCORRECT" 

	








	/*var printWordToGuess = function() {
		for (var i = 0; i < wordToGuess.length; i++) {
			var word = document.getElementById('word');
			var printedWord = document.createTextNode(wordToGuess[i]);
			word.appendChild(printedWord);
		}*/
	//}

	// 	$("p").on("click", function(){
//     alert("The paragraph was clicked.");
// });$("input:text").val("Glenn Quagmire");

	$('#submit').on('click', function() {
		var x = $('#guessInput').val();
		alert(x);
	});
};


