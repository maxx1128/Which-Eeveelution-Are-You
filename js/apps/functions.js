// The filter to show the current question only as they're being answered
$scope.isStatus = function(question){
    return (question.number == $scope.q.current);
};

// The function for quickly updating the progress bar text in the progressText array
progressCheck = function(point){
  return $scope.progressText[point].text;
};

// Setup any variables right away
$scope.buttons.text = $scope.buttons.start; // Set the initial button text
$scope.progress = progressCheck(0); // Set the initial progress text

// This function runs whenever a question is answered
$scope.answer = function(number) {
  $scope.results[number].value++ ; // Adds the selected value to the results

  if ( $scope.q.current == ($scope.q.left - 1) ) { //When the user is at the last question
  	$scope.buttons.start = $scope.buttons.end; //Changes the button text for the last question to the end text
  }

  if($scope.q.left > $scope.q.current) { // If there's still questions left to answer
  	$scope.q.current++ ; // Goes to the next question
  } else if ($scope.q.left == $scope.q.current) { // If they're at the last question when answering
  	$scope.view.quizOver = true; // Goes to the results page
  }

  if ($scope.q.current > ($scope.q.left - 2)) { // At the last two questions
    $scope.progress = progressCheck(4);
  } else if ($scope.q.current > ($scope.q.left / 1.5)) { // Three quarters of the way through the quiz
    $scope.progress = progressCheck(3);
  } else if ($scope.q.current > ($scope.q.left / 2)) { // Halfway through the quiz
    $scope.progress = progressCheck(2);
  } else if ($scope.q.current > ($scope.q.left / 4)) { // One fourth of the way through the quiz
    $scope.progress = progressCheck(1);
  }
};