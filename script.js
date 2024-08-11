// app.js
 
// Complete logic of game inside this function

//button



function promptMe(){
    var userAdjective = prompt("Quanti quadrati per lato nella nuova griglia ?");
    alert (userAdjective);





// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below


   var dots = [],
   mouse = {
     x: 0,
     y: 0
   };

// The Dot object used to scaffold the dots

var Dot = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("test");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};

// The Dot.prototype.draw() method sets the position of 
 // the object's <div> node
 
Dot.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array

for (var i = 0; i < 12; i++) {
 var d = new Dot();
 dots.push(d);
}

// This is the screen redraw function

function draw() {
 
    // Make sure the mouse position is set everytime
   // draw() is called.
 var x = mouse.x,
     y = mouse.y;
 
 // This loop is where all the 90s magic happens

 dots.forEach(function(dot, index, dots) {
   var nextDot = dots[index + 1] || dots[0];
   
   dot.x = x;
   dot.y = y;
   dot.draw();
   x += (nextDot.x - dot.x) * .6;
   y += (nextDot.y - dot.y) * .6;

 });
}

addEventListener("mousemove", function(event) {
 //event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
 // everytime the screen repaints via requestAnimationFrame().

function animate() {
 draw();
 requestAnimationFrame(animate);
}

// And get it started by calling animate().

animate();



let gridContainer = document.querySelector('.grid');

let rowtot = (userAdjective);
let celltot = rowtot * rowtot;

gridContainer.style.display = 'div';
gridContainer.style.gridTemplateRows = `repeat(${rowtot}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${rowtot}, 1fr)`;

let row = 1;
let column = 1;
for (let i = 1; i <= celltot; i++) {
  let cell = document.createElement('div');
  cell.style.border = '1px solid black';
  cell.style.gridRow = row;
  cell.style.gridColumn = column;
  cell.textContent = i;
  column += 1;
  if (column === rowtot + 1) {
    row += 1;
    column = 1;
  }
  gridContainer.appendChild(cell);
}

}