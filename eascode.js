const container = document.getElementById('gridArea');
const displayArea = 500;

function makeSquare (size) {
  const square = document.createElement('div');
  square.className = 'gridSquare';
  square.style.padding = `${size}px`
  square.innerHTML = "&nbsp"
  square.addEventListener('mouseenter', drawn);
  container.appendChild(square);
}

function lineBreaker () {
  const breaker = document.createElement('div');
  breaker.className = 'lineBreaker';
  container.appendChild(breaker);
}

function drawn () {
  this.classList.add('drawn');
}

function createGrid () {

  var input = prompt("Please enter number of squares (max 100)");
  var availableSpace = displayArea - input;
  var squareSize = (availableSpace/input);
  var counterOne = 1;
  var counterTwo = 0;

  if (input >100) {
    var input = prompt("Number greater than 100! Please enter number of squares (max 100)");
  }

  for (let i = 1; i <= (input * input + (input - 1)); i++) {
    if (i == input * counterOne + 1 + counterTwo) {
      lineBreaker();
      counterOne ++;
      counterTwo++;
    } else {
      makeSquare(squareSize)
    }
  }
}

function reset () {
  window.location.reload();

}

createGrid();


