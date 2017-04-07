// Constantes
var COLUMNS	= 30;
var ROWS	= 20;
var SCALE	= 30;
var WIDTH	= COLUMNS * SCALE;
var HEIGHT	= ROWS * SCALE;
var SPEED	= 100;
var FILLING_RATE = 40;

var EMPTY	= 0;
var FULL	= 1;

// Project objects
var gridCanvas, gridContext;
var populationCanvas, populationContext;
var frames;

var population = {
	
	grid: null,
	
	init: function() {
		
		this.grid = [];
		for ( var x = 0; x < COLUMNS; x++ ) {
			this.grid.push([]);
			for ( var y = 0; y < ROWS; y++ ) {
				var random = Math.floor(Math.random() * 100); // entre 0 et 99, bornes incluses

				if (random < FILLING_RATE) {
					this.grid[x].push(FULL);
				} else {
					this.grid[x].push(EMPTY);
				}
			}
		}
	},
	
	freeCell: function(x, y) {
		this.grid[x][y] = EMPTY;
	},
	
	fillCell: function(x, y) {
		this.grid[x][y] = FULL;
	},

	get: function(x, y) {
		return this.grid[x][y];	
	}
}

function main() {

	gridCanvas = document.createElement("canvas");
	gridCanvas.width = WIDTH;
	gridCanvas.height = HEIGHT;
	gridContext = gridCanvas.getContext("2d");
	document.getElementById("gameoflife").appendChild(gridCanvas);
	
	populationCanvas = document.createElement("canvas");
	populationCanvas.width = WIDTH;
	populationCanvas.height = HEIGHT;
	populationContext = populationCanvas.getContext("2d");
	document.getElementById("gameoflife").appendChild(populationCanvas);

	frames = 0;

	init();
	loop();
}

function init() {
	population.init();
	drawGrid();
	drawPopulation();	
}

function loop() {
	update();
	//draw();
	
	window.requestAnimationFrame(loop, populationCanvas);
}

function update() {

	//populationContext.clearRect(0, 0, WIDTH, HEIGHT);

}

function drawPopulation() {
	
	for ( var x = 0; x < COLUMNS; x++ ) {
		for ( var y = 0; y < ROWS; y++ ) {
			
			console.log(population.get(x, y));
			
			if (population.get(x, y) == FULL) {
				populationContext.fillStyle = "#c4cbf7";
				populationContext.fillRect( x * SCALE, y * SCALE, SCALE, SCALE );
			}
		}
	}
}


function drawGrid() {
	for (x = SCALE; x < WIDTH; x += SCALE) {
		gridContext.moveTo(x, 0);
		gridContext.lineTo(x, HEIGHT);
		
		for (y = SCALE; y < HEIGHT; y += SCALE) {
			gridContext.moveTo(0, y);
			gridContext.lineTo(WIDTH, y);
		}
	}
	gridContext.strokeStyle = "#828DCE";
	gridContext.stroke();
}




main();

