$scope.isStatus = function(question){
    return (question.number == $scope.idr);
};

$scope.answer = function(number) {
  $scope.results[number].value++ ;

  if ( $scope.idr == ($scope.QLeft - 1) ) {
  	$scope.button = 'Finish Quiz';
  }

  if($scope.QLeft > $scope.idr) {
  	$scope.idr++ ;
  } else if ($scope.QLeft == $scope.idr) {
  	$scope.quizOver = true;
  }

  if ($scope.idr > ($scope.QLeft - 2)) {
    $scope.progress = 'The home stretch!';
  } else if ($scope.idr > ($scope.QLeft / 1.5)) {
    $scope.progress = 'Keep it up!';
  } else if ($scope.idr > ($scope.QLeft / 2)) {
    $scope.progress = 'Halfway there!';
  } else if ($scope.idr > ($scope.QLeft / 4)) {
    $scope.progress = 'You\'re getting closer...';
  }
};