
let gridContainer = document.querySelector('.grid');
let rowtot
let celltot

var { mouse, dots } = setMouseTrail();

function setMouseTrail() {
    var dots = [], mouse = {
        x: 0,
        y: 0
    };


    var Dot = function () {
        this.x = 0;
        this.y = 0;
        this.node = (function () {
            var n = document.createElement("test");
            n.className = "trail";
            document.body.appendChild(n);
            return n;
        } ());
    };

    Dot.prototype.draw = function () {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    };


    for (var i = 0; i < 12; i++) {
        var d = new Dot();
        dots.push(d);
    }

   addEventListener("mousemove", function (event) {

        mouse.x = event.pageX;
        mouse.y = event.pageY;
    });
    return { mouse, dots };
}

function promptMe() {
    var userAdjective = prompt("Quanti quadrati per lato nella nuova griglia ?");
    alert(userAdjective);


    animate();

   

    rowtot = (userAdjective);
    celltot = rowtot * rowtot;


    removeInitialGrid()
    setGridContainerStyle()
    renderCells()

    

}

function animate() {
    draw();
    requestAnimationFrame(animate);
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

function   removeInitialGrid(){

    if (userAdjective = "")
    console.log()   
    { gridContainer.innerHTML=""}}


function setGridContainerStyle() {

    gridContainer.style.display = 'div';
    gridContainer.style.gridTemplateRows = `repeat(${rowtot}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${rowtot}, 1fr)`;
}

function renderCells() {

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



