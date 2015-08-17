//=require ../components/angular/angular.min.js

var eeveeQuiz = angular.module('eeveeApp', []);

eeveeQuiz.controller("quizData", ["$scope", function($scope) {
	$scope.questions = [
		{
			'number': '1',
			'question': 'What\'s your favorite color?',
			'answers':[
				{
					'text': 'Red',
					'value': 'Flareon'
				},{
					'text': 'Blue',
					'value': 'Vaporeon'
				},{
					'text': 'Yellow',
					'value': 'Jolteon'
				}
			]
		}, {
			'number': '2',
			'question': 'What\'s your favorite color?',
			'answers':[
				{
					'text': 'Red',
					'value': 'Flareon'
				},{
					'text': 'Blue',
					'value': 'Vaporeon'
				},{
					'text': 'Yellow',
					'value': 'Jolteon'
				}
			]
		}
	], $scope.results = [
		{
			'name': 'Eevee',
			'type': 'normal'
		}, {
			'name': 'Vaporeon',
			'type': 'water'
		}, {
			'name': 'Jolteon',
			'type': 'electric'
		}, {
			'name': 'Flareon',
			'type': 'fire'
		}, {
			'name': 'Espeon',
			'type': 'psychic'
		}, {
			'name': 'Umbreon',
			'type': 'dark'
		}, {
			'name': 'Glaceon',
			'type': 'ice'
		}, {
			'name': 'Leafeon',
			'type': 'grass'
		}, {
			'name': 'Sylveon',
			'type': 'fairy'
		}
	];
}])