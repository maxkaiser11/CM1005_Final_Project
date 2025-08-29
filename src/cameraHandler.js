/* ======================================================================= */
/* =========== Camera Scroll Functionality (More can be added)============ */
/* ======================================================================= */


function cameraHandler()
{
// Making camera scroll left and right depending on character input (made a variable for cameraSpeed so can be easily adjusted)
	if (isRight)
	{
		cameraPosX += cameraSpeed;
	}
	else if ( isLeft)
	{
		cameraPosX -= cameraSpeed;
	}

	if (isLeft)
	{
		gameChar_x -= 2;
	}

	if (isRight)
	{
		gameChar_x += 2;
	}

	if (gameChar_y < floorPos_y)
	{
		gameChar_y += 2.5;
		isFalling = true;
	}
	else{
		isFalling = false;
	}


	for (var i = 0; i < canyons.length; i++)
	{
		if (
		gameChar_x > canyons[i].x_pos&&
		gameChar_x < canyons[i].x_pos + canyons[i].width &&
		gameChar_y >= floorPos_y
		)	 
		{
			isPlummeting = true;
		}
	}

	if (isPlummeting)
	{
		gameChar_y += 5;
	}
	cameraPosX = gameChar_x - width/2;
}

