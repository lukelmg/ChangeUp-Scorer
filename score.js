var finalScore = 0;

var redArray = [];
var blueArray = [];

function score(id) {
  finalScore = 0;
  var current = document.getElementById(id);
  if (redState == true) {
    var addColor = redColor
  } else if (blueState == true){
    var addColor = blueColor
  } else {
    var addColor = 'white;'
  }
  current.style.backgroundColor = addColor;
  current.title = addColor;

  for (var i = 0; i < 9; i++) {
    for (var e = 0; e < 3; e++) {
      var ball = document.getElementById(goalLabels[i]+e);
      if (ball.title == redColor) {
        finalScore++;
      } else if (ball.title == blueColor) {
        finalScore--;
      }
    }
  }
  finalScore += 63;
  document.getElementById('scoreOutput').innerHTML = finalScore;
}
