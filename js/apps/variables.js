// Integer Values
$scope.q = { // Number values related to the questions
	'left' : $scope.questions.length, // The total number of questions, based on the data array
	'current' : 1 // The current number of questions, incremented as the quiz goes on7
};

// Boolean values
$scope.view = {
	'quizOver': false, // If the quiz is over, to show the results page
	'quizBegin': false // If the quiz was started, to show the questions
};

// String Values
$scope.progress = ''; // The text on the quiz button
$scope.progressText = [{
		'text':	'Still a long way to go...' // Initial progress text
	}, {
		'text': 'Getting closer...' //Progress text for 1/4 progress
	}, {
		'text': 'You\'re halfway there!' //Progress text for 1/2 progress
	}, {
		'text': 'Keep going!' //Progress text for 3/4 progress
	}, {
		'text': 'The home stretch!' //Progress text for last two questions
}];

$scope.buttons = {
	'text': '', // Blank variable for button text 
	'start': 'Next Question', // Initial button text, for most questions
	'end': 'Finish Quiz!' // Button text for last questions
};