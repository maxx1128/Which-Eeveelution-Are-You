// Integer Values
$scope.QLeft = $scope.questions.length;
$scope.totalPoints = 20;
$scope.idr = 1;

// Boolean values
$scope.quizOver = false;
$scope.quizBegin = false;

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