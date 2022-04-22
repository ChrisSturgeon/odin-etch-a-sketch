var input = 10;

var sizing = (400/input);


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

for (let i = 1; i <= (input * input); i++) {
  if (i % input !== 0) {
    makeSquare();
  } else {
    lineBreaker();
  }
}

function drawn () {
  this.classList.add('drawn');
}