<<<<<<< HEAD


document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById('gridContainer');

  // Create a 16x16 grid (256 cells)
  for (let i = 1; i < 257; i++) {
    const cell = document.createElement('div');
    cell.textContent = i;
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
  }
});

function promptMe() {


  let sideLength = prompt("Quanti quadrati per lato nella nuova griglia ?");

  if (isNaN(sideLength) || sideLength <= 0 || sideLength > 100) {
    alert("Per favore inserisci un numero superiore tra 1 e 100, grazie !");
    return;

    function generateGrid() {
      const gridContainer = document.getElementById('gridContainer');

    }

  }

  gridContainer.innerHTML = '';

  gridContainer.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;


  const totalCells = sideLength * sideLength;


  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.textContent = i;
    gridContainer.appendChild(cell);
  }



  animate();
}



var dots = [],
  mouse = {
    x: 0,
    y: 0
  };


var Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = (function () {
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}


function draw() {

  var x = mouse.x,
    y = mouse.y;


  dots.forEach(function (dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function (event) {

  mouse.x = event.pageX;
  mouse.y = event.pageY;
});


function animate() {
  draw();
  requestAnimationFrame(animate);
}



=======


document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById('gridContainer');

  // Create a 16x16 grid (256 cells)
  for (let i = 1; i < 257; i++) {
    const cell = document.createElement('div');
    cell.textContent = i;
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
  }
});

function promptMe() {


  let sideLength = prompt("Quanti quadrati per lato nella nuova griglia ?");

  if (isNaN(sideLength) || sideLength <= 0 || sideLength > 100) {
    alert("Per favore inserisci un numero superiore tra 1 e 100, grazie !");
    return;

    function generateGrid() {
      const gridContainer = document.getElementById('gridContainer');

    }

  }

  gridContainer.innerHTML = '';

  gridContainer.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;


  const totalCells = sideLength * sideLength;


  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    cell.textContent = i;
    gridContainer.appendChild(cell);
  }



  animate();
}



var dots = [],
  mouse = {
    x: 0,
    y: 0
  };


var Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = (function () {
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}


function draw() {

  var x = mouse.x,
    y = mouse.y;


  dots.forEach(function (dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function (event) {

  mouse.x = event.pageX;
  mouse.y = event.pageY;
});


function animate() {
  draw();
  requestAnimationFrame(animate);
}



>>>>>>> 1c261ac778518605af19a8a433a0e1180e0c35c5
