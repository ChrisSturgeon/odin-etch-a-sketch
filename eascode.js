const container = document.getElementById('gridArea');
const displayArea = 500;

function makeSquare (size) {
  const square = document.createElement('div');
  square.className = 'gridSquare';
  square.style.backgroundColor = 'white';
  square.style.padding = `${size}px`;
  square.innerHTML = "&nbsp";
  square.addEventListener('mouseenter', drawn);
  container.appendChild(square);
}

function lineBreaker () {
  const breaker = document.createElement('div');
  breaker.className = 'lineBreaker';
  container.appendChild(breaker);
}

function drawn () {

  if (this.style.backgroundColor == "white") {
    red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
  } else {
    red -= (red * 0.1);
    green -= (green * 0.1);
    blue -= (blue * 0.1);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
  }
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
  squares = document.querySelectorAll('.gridSquare');
  squares.forEach(square => square.style.backgroundColor = "white");
}

function reload () {
  window.location.reload();
}

createGrid();


