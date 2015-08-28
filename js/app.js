//=require ../components/angular/angular.min.jsvar eeveeQuiz = angular.module('eeveeApp', []);  eeveeQuiz.controller("quizData", ["$scope", function($scope) {	$scope.questions = [		{			'number': 1,			'selected': '',			'question': 'What\'s your favorite season?',			'answers':[				{					'text': 'Spring',					'index': 8				},{					'text': 'Summer',					'index': 3				},{					'text': 'Fall',					'index': 6				}, {					'text': 'Winter',					'index': 7				}			]		}, {			'number': 2,			'selected': '',			'question': 'How would you describe your personality?',			'answers':[				{					'text': 'Cheerful',					'index': 8				},{					'text': 'Secretive',					'index': 5				}, {					'text': 'Flexible',					'index': 1				}, {					'text': 'Intelligent',					'index': 4				}, {					'text': 'Energetic',					'index': 2				}, {					'text': 'Down to Earth',					'index': 0				}			]		}, {			'number': 3,			'selected': '',			'question': 'What\s your favorite food or snack?',			'answers':[				{					'text': 'Ice Cream',					'index': 7				},{					'text': 'Watermelon',					'index': 1				}, {					'text': 'Fruits and vegetables',					'index': 6				}, {					'text': 'Something with Cheese',					'index': 3				}, {					'text': 'Anything, really',					'index': 0				}			]		}, {			'number': 4,			'selected': '',			'question': 'What\s your favorite way to exercise?',			'answers':[				{					'text': 'Jogging outside',					'index': 6				},{					'text': 'Sprinting',					'index': 2				}, {					'text': 'Yoga and meditation',					'index': 4				}, {					'text': 'Swimming',					'index': 1				}			]		}, {			'number': 5,			'selected': '',			'question': 'Favorite time of day?',			'answers':[				{					'text': 'Morning',					'index': 4				},{					'text': 'Night',					'index': 5				}			]		}, {			'number': 6,			'selected': '',			'question': 'If you were a fighter in an arena, what would your strategy be?',			'answers':[				{					'text': 'Hit them before they hit me',					'index': 2				}, {					'text': 'Overwhelm them with pure force',					'index': 6				}, {					'text': 'Wear them down until they\'re too tired to fight back',					'index': 5				}, {					'text': 'Try to balance offense and defense',					'index': 0				}, {					'text': 'Trick them into letting down their guard, then strike',					'index': 8				}			]		}	], $scope.results = [		{			'name': 'Eevee',			'type': 'normal',			'value': 0		}, {			'name': 'Vaporeon',			'type': 'water',			'value': 0		}, {			'name': 'Jolteon',			'type': 'electric',			'value': 0		}, {			'name': 'Flareon',			'type': 'fire',			'value': 0		}, {			'name': 'Espeon',			'type': 'psychic',			'value': 0		}, {			'name': 'Umbreon',			'type': 'dark',			'value': 0		}, {			'name': 'Leafeon',			'type': 'grass',			'value': 0		}, {			'name': 'Glaceon',			'type': 'ice',			'value': 0		}, {			'name': 'Sylveon',			'type': 'fairy',			'value': 0		}	];	$scope.QLeft = $scope.questions.length;	$scope.quizOver = false;		$scope.idr = 1;	$scope.isStatus = function(question){	    return (question.number == $scope.idr);	};		$scope.answer = function(number) {	  $scope.results[number].value++ ;	  if($scope.QLeft > $scope.idr) {	  	$scope.idr++ ;	  } else if ($scope.QLeft == $scope.idr) {	  	$scope.quizOver = true;	  }	};}]);