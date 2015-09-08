$scope.isStatus = function(question){
    return (question.number == $scope.idr);
};

$scope.answer = function(number) {
  $scope.results[number].value++ ;

  if($scope.QLeft > $scope.idr) {
  	$scope.idr++ ;
  } else if ($scope.QLeft == $scope.idr) {
  	$scope.quizOver = true;
  }
};