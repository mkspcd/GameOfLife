// Constantes
var WIDTH	= 900;
var HEIGHT	= 600;
var SIZE	= 30;
var COLUMNS	= WIDTH / SIZE;
var ROWS	= HEIGHT / SIZE;

var SPEED	= 100;


var population;

// Project objects
var canvas, context, frames;

function main() {
	canvas = document.createElement("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	context = canvas.getContext("2d");
	document.getElementById("gameoflife").appendChild(canvas);
	
	frames = 0;
	
	init();
	loop();
}

function init() {
	drawGrid();
	randomDraw();

}

function loop() {
	update();
	draw();
	
	window.requestAnimationFrame(loop, canvas);
}

function update() {
}

function draw() {
}

function randomDraw() {
	
	for ( var x = 0; x < COLUMNS; x++ ) {
		for ( var y = 0; y < ROWS; y++ ) {
			
			var random = Math.floor(Math.random() * 10);
			console.log(random);
			
			if (random <= 2) {
				context.fillStyle = "#FFFFFF";
				context.strokeStyle = "#DBDEF0";
				//context.stroke();
				context.fillRect( x * SIZE, y * SIZE, SIZE, SIZE );
			}
		}
	}
}


function drawGrid() {
	for (x = SIZE; x < WIDTH; x += SIZE) {
		context.moveTo(x, 0);
		context.lineTo(x, HEIGHT);
		for (y = SIZE; y < HEIGHT; y += SIZE) {
			context.moveTo(0, y);
			context.lineTo(WIDTH, y);
		}
	}
	context.strokeStyle = "#828DCE";
	context.lineWidth = 1;
	context.stroke();
}




main();

