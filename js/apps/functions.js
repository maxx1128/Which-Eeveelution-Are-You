$scope.isStatus = function(question){
    return (question.number == $scope.idr);
};

progressCheck = function(point){
  return $scope.progressText[point].text;
};

$scope.answer = function(number) {
  $scope.results[number].value++ ;

  if ( $scope.idr == ($scope.QLeft - 1) ) {
  	$scope.buttons.start = $scope.buttons.end;
  }

  if($scope.QLeft > $scope.idr) {
  	$scope.idr++ ;
  } else if ($scope.QLeft == $scope.idr) {
  	$scope.quizOver = true;
  }

  if ($scope.idr > ($scope.QLeft - 2)) {
    $scope.progress = progressCheck(3);
  } else if ($scope.idr > ($scope.QLeft / 1.5)) {
    $scope.progress = progressCheck(2);
  } else if ($scope.idr > ($scope.QLeft / 2)) {
    $scope.progress = progressCheck(1);
  } else if ($scope.idr > ($scope.QLeft / 4)) {
    $scope.progress = progressCheck(0);
  }
};