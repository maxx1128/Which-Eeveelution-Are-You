// Integer Values
$scope.q = {
	'left' : $scope.questions.length,
	'totalPoints' : 20,
	'current' : 1
}

// Boolean values
$scope.view = {
	'quizOver': false,
	'quizBegin': false
};

// String Values
$scope.progress = 'Still a long way to go...';

$scope.progressText = [
	{
		'text': 'Getting closer...'
	}, {
		'text': 'You\'re halfway there!'
	}, {
		'text': 'Keep going!'
	}, {
		'text': 'The home stretch!'
	}
];

$scope.buttons = {
	'start': 'Next Question',
	'end': 'Finish Quiz!'
};