/* =================================================== */
/* =========== Initializes Game Variables ============ */
/* =================================================== */



// Movement Variables
var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

// Enviornment Variables
var collectables;
var canyons;

var trees_x;
var treePos_y;
var trunkTopY;
var clouds;
var mountains;

// game mechanics variables
var game_score;
var flagpole;
var lives;
var maxLives;
var maxScore;

// Sounds
var pickupSound;
var damageSound;
var gameOverSound;
var gameWonSound;


/*********Start of code written without assistance *********/
// Scrolling Variables
var cameraPosX;
var cameraSpeed;
/*********End of code written without assistance *********/

// Initializes (Loads) All Sounds
function initSounds()
{
	// CoinPickUp Sound
	pickupSound = loadSound('sfx/CoinPickUp.mp3');
	pickupSound.setVolume(0.5);

	// Damage Sound
	damageSound = loadSound('sfx/hitSound.mp3');
	damageSound.setVolume(0.5);

	// Game Over Sound
	gameOverSound = loadSound('sfx/gameOverSound.mp3');
	gameOverSound.setVolume(0.5);

	// Game Won Sound
	gameWonSound = loadSound('sfx/gameWonSound.mp3');
	gameWonSound.setVolume(0.5);
}



function startGame()
{


	// Initializing character movement variables
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	/*********Start of code written without assistance *********/
	// Camera initialization
	cameraPosX = 0;
	cameraSpeed = 2;
	/*********End of code written without assistance *********/




	//  Initializing Enviornemnt variables
	trees_x = [300, 500, 900, 1150];


	/*********Start of code written without assistance *********/
	clouds = [
		cloud = {
			x1: 200,
			y1: 140,
			x2: 160,
			y2: 150,
			x3: 240,
			y3: 150
		},
		cloud = {
			x1: 650,
			y1: 150,
			x2: 610,
			y2: 160,
			x3: 690,
			y3: 160
		},
		cloud = {
			x1: 400,
			y1: 40,
			x2: 360,
			y2: 50,
			x3: 440,
			y3: 50
		}
	];

	mountains = [
		mountain = {
			topX: 500,
			topY: 100,
			leftX: 300,
			leftY: 433,
			rightX: 800,
			rightY: 433
		},
		mountain = {
			topX: 1000,
			topY: 100,
			leftX: 800,
			leftY: 433,
			rightX: 1300,
			rightY: 433
		},
		mountain = {
			topX: 200,
			topY: 100,
			leftX: 0,
			leftY: 433,
			rightX: 500,
			rightY: 433
		}
	];

	collectables = [
		collectable = {
		x_pos: 100,
		y_pos: floorPos_y - 30,
		size: 50,
		isFound: false
		},
		collectable = {
		x_pos: 400,
		y_pos: floorPos_y - 30,
		size: 50,
		isFound: false
		},
		collectable = {
		x_pos: 800,
		y_pos: floorPos_y - 30,
		size: 50,
		isFound: false
		}
	]

	treePos_y = floorPos_y;
	trunkTopY = treePos_y - 150;

	canyons = [
		canyon = {
		x_pos: 800,
		width: 75
		},
		canyon = {
		x_pos: 200,
		width: 75
		},
		canyon = {
		x_pos: 50,
		width: 75
		}
	]

	game_score = 0;

	flagpole = {
		x_pos: 950,
		isReached: false
	};
	/*********End of code written without assistance *********/
}