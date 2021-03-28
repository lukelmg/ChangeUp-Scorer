var finalScore = 0;

var ballArray = new Array(9);
for (var i = 0; i < ballArray.length; ++i) {
  ballArray[i] = new Array(3);
}

var owned = [];

const rows = {
  0:[0,1,2],
  1:[3,4,5],
  2:[6,7,8],
  3:[0,3,6],
  4:[1,4,7],
  5:[2,5,8],
  6:[0,4,8],
  7:[2,4,6]
};

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
        ballArray[i][e] = 'red'
      } else if (ball.title == blueColor) {
        finalScore--;
        ballArray[i][e] = 'blue'
      }
    }
  }


  for (var i = 0; i < 9; i++) {
    for (var e = 0; e < 3; e++) {
      ballArray[i] = ballArray[i].filter(function (el) {
        return el != null;
      });
    }
    if(ballArray[i].slice(-1)[0] == 'red') {
      owned[i] = 'red';
    } else if (ballArray[i].slice(-1)[0] == 'blue') {
      owned[i] = 'blue';
    }
  }

  const ownedColors = {};

  for (let i = 0; i < owned.length; i++) {
    (ownedColors[owned[i]] ??= []).push(i);
  }

  function check(series,positions){
    let pos=0;
    for(let item of series){
      while(positions[pos]<item && pos<positions.length)
        pos++;
        if(pos==positions.length || positions[pos]!==item)
        return false;
      }
    return true;
  }

  console.log(ownedColors.blue)
  for (var i = 0; i < 8; i++) {
    if(ownedColors.red != undefined && check(rows[i],ownedColors.red)) {
      finalScore += 6;
    } else if (ownedColors.blue != undefined && check(rows[i],ownedColors.blue)) {
      finalScore -= 6;
    }
  }


  finalScore += 63;
//  console.log(ownedColors);
  document.getElementById('scoreOutput').innerHTML = finalScore;
}
