
var redState = false,
    blueState = false;

const redColor = '#fc0349';
const blueColor = '#038cfc';

function no() {}

const position = ['top', 'middle', 'bottom'];
const goalLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

  for (var e = 0; e < 9; e++) {
    const goal = document.createElement('div');
    goal.className = 'goal ' + goalLabels[e];
    for (var p = 0; p < 3; p++) {
      const slot = document.createElement('div');
      slot.className = 'ballslot ' + position[p];
      slot.id = goalLabels[e] + ((p-2)*-1);
      slot.onclick = function() {
        score(this.id);
      }
      goal.appendChild(slot);
    }
    document.body.appendChild(goal);
  }

const scoreOutput = document.createElement('h1');
scoreOutput.id = 'scoreOutput';
scoreOutput.innerHTML = '63';

const red = document.createElement('button');
red.id = 'red';
red.innerHTML = 'Red'

const blue = document.createElement('button');
blue.id = 'blue';
blue.innerHTML = 'Blue'

const erase = document.createElement('button');
erase.id = 'erase';
erase.innerHTML = 'Erase'

document.body.appendChild(red);
document.body.appendChild(blue);
document.body.appendChild(erase);
document.body.appendChild(scoreOutput);


red.addEventListener("click", function() {
  if (redState == false && blueState == false) {
    red.style.backgroundColor = redColor;
    red.style.color = 'white';
    redState = true;
  } else if (redState == false && blueState == true) {
    red.style.backgroundColor = redColor;
    red.style.color = 'white';
    blue.style.backgroundColor = 'transparent';
    blue.style.color = '#1e1e1e';
    redState = true;
    blueState = false;
  }
});

blue.addEventListener("click", function() {
  if (blueState == false && redState == false) {
    blue.style.backgroundColor = blueColor;
    blue.style.color = 'white';
    blueState = true;
  } else if (blueState == false && redState == true) {
    blue.style.backgroundColor = blueColor;
    blue.style.color = 'white';
    red.style.backgroundColor = 'transparent';
    red.style.color = '#1e1e1e';
    blueState = true;
    redState = false;
  }
});
