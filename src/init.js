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
var maxLives = 3;
var maxScore = 3;
var respawnFrames = 0;

// Sounds
var pickupSound;
var damageSound;
var gameOverSound;
var gameWonSound;
var jumpSound;

// platforms
var platforms;

// enemies
var enemies;

// Movement Constants
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const SPACE_BAR = 32;
const RESTART_KEY = 82;

const CHAR_HALF_W = 12;
const CHAR_HEIGHT = 60;


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

	// Jump Sound
	jumpSound = loadSound('sfx/jumpSound.mp3');
	jumpSound.setVolume(0.5);
}



function startGame()
{
	game_score = 0;

	// Initializing character movement variables
	gameChar_x = -200;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Camera initialization
	cameraPosX = 0;
	cameraSpeed = 2;

	//  Initializing Enviornemnt variables
	// trees_x = [300, 500, 900, 1150];
	trees_x = [-350, -100, 150, 400, 650, 900, 1150];

	// Init Enemies
	enemies = [];
	enemies.push(new Enemy(100, floorPos_y - 10, 100));
	

	// Init platforms array
	platforms = [];
	platforms.push(createPlatform(100, floorPos_y - 50, 200));
	platforms.push(createPlatform(400, floorPos_y - 120, 150));
	platforms.push(createPlatform(750, floorPos_y - 80, 100));

	clouds = [
		{ x1: 200,  y1: 120, x2: 160, y2: 130, x3: 240, y3: 130 },
		{ x1: 600,  y1: 100, x2: 560, y2: 110, x3: 640, y3: 110 },
		{ x1: 1000, y1: 80,  x2: 960, y2: 90,  x3: 1040,y3: 90  },
		{ x1: 1400, y1: 150, x2: 1360,y2: 160, x3: 1440,y3: 160 }
	];

	mountains = [
		{ topX: -200, topY: 130, leftX: -400, leftY: floorPos_y, rightX: 0,    rightY: floorPos_y },
		{ topX: 300,  topY: 120, leftX: 100,  leftY: floorPos_y, rightX: 500,  rightY: floorPos_y },
		{ topX: 800,  topY: 100, leftX: 600,  leftY: floorPos_y, rightX: 1000, rightY: floorPos_y },
		{ topX: 1300, topY: 110, leftX: 1100, leftY: floorPos_y, rightX: 1500, rightY: floorPos_y }
	];


	collectables = [
		{ x_pos: 200, y_pos: floorPos_y - 80, size: 50, isFound: false },
		{x_pos: 450, y_pos: floorPos_y - 150, size: 50, isFound: false },
		{ x_pos: 800, y_pos: floorPos_y - 30, size: 50, isFound: false }	
	]

	treePos_y = floorPos_y;
	trunkTopY = treePos_y - 150;

	canyons = [
		{ x_pos: 800, width: 150 },
		{ x_pos: 350, width: 125 },
	]


	

	flagpole = {
		x_pos: 1250,
		isReached: false
	};

}