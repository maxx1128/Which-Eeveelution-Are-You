$scope.isStatus = function(question){
    return (question.number == $scope.q.current);
};

progressCheck = function(point){
  return $scope.progressText[point].text;
};

$scope.answer = function(number) {
  $scope.results[number].value++ ;

  if ( $scope.q.current == ($scope.q.left - 1) ) {
  	$scope.buttons.start = $scope.buttons.end;
  }

  if($scope.q.left > $scope.q.current) {
  	$scope.q.current++ ;
  } else if ($scope.q.left == $scope.q.current) {
  	$scope.view.quizOver = true;
  }

  if ($scope.q.current > ($scope.q.left - 2)) {
    $scope.progress = progressCheck(3);
  } else if ($scope.q.current > ($scope.q.left / 1.5)) {
    $scope.progress = progressCheck(2);
  } else if ($scope.q.current > ($scope.q.left / 2)) {
    $scope.progress = progressCheck(1);
  } else if ($scope.q.current > ($scope.q.left / 4)) {
    $scope.progress = progressCheck(0);
  }
};