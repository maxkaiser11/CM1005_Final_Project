function preload()
{
	soundFormats('mp3', 'wav');
	initSounds();
}


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	const maxLives = 3;
	lives = maxLives;
	startGame();
}

function draw()
{

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	/********** Camera **********/
	// Scrolling camera based on character direction
	cameraHandler();
	
	// Camera Scrolling
	push();
	translate(-cameraPosX,0);


/********** DRAWING ENVIORNMENT **********/

	// DRAWING MOUNTAINS
	drawMountains();

	// DRAWING TREES
	drawTrees();

	// DRAWING CLOUDS
	drawClouds();

	// Drawing Flagpole
	drawFlagPole();

	// Drawing the Canyon

	for (var i = 0; i < canyons.length; i++)
	{
		drawCanyon(canyons[i]);
	}

	// Drawing the Collectable
	for (var i = 0; i < collectables.length; i++)
	{
		if(!collectables[i].isFound)
		{
			drawCollectable(collectables[i]);
		}
	}

/********** CHARACTER MOVEMENT **********/

	// Moves the Character
	characterMovement();

	pop();

	// Game HUD (Main UI)
	HUD();

	if (!flagpole.isReached)
	{
		checkFlagPole();
	}
		checkPlayerDie();
}


// Calling Input Functions
keyPressed();
keyReleased();

