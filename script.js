function promptMe() {
    var sideLength = prompt("Quanti quadrati per lato nella nuova griglia ?");
    

    function generateGrid() {
        const gridContainer = document.getElementById('gridContainer');
        const sideLengthInput = document.getElementById('sideLengthInput');
        const sideLength = parseInt(sideLengthInput.value);
    
        if (isNaN(sideLength) || sideLength <= 0) {
            alert("Please enter a valid number greater than 0.");
            return;
        }
    
        // Clear the grid container
        gridContainer.innerHTML = '';
    
        // Set grid template rows and columns based on the side length
        gridContainer.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
    
        // Calculate total number of cells
        const totalCells = sideLength * sideLength;
    
        // Create the cells
        for (let i = 1; i <= totalCells; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.textContent = i;
            gridContainer.appendChild(cell);
        }
    }
    


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

    addEventListener("mousemove", function (event) {

        mouse.x = event.pageX;
        mouse.y = event.pageY;
    });
    return { mouse, dots };
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
}


