// Constantes
var WIDTH		= 900;
var HEIGHT		= 600;

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

main();
