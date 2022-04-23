var input = 100;

var availableSpace = 400 - input

var sizing = (availableSpace/input);


var counter = 1;
var turtle = 0;

const container = document.getElementById('gridArea');

function makeSquare () {
  const square = document.createElement('div');
  square.className = 'gridSquare';
  square.style.padding = `${sizing}px`
  square.innerHTML = "&nbsp"
  square.addEventListener('mouseenter', drawn);

  container.appendChild(square);
}

function lineBreaker () {
  const breaker = document.createElement('div');
  breaker.className = 'lineBreaker';
  container.appendChild(breaker);
}

for (let i = 1; i <= (input * input + (input - 1)); i++) {
  if (i == input * counter + 1 + turtle) {
    lineBreaker();
    counter ++;
    turtle++;
    console.log(counter);
  } else {
    makeSquare()
  }
}


function drawn () {
  this.classList.add('drawn');
}