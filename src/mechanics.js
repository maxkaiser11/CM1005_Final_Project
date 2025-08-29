/* =================================================== */
/* =========== Game Mechanics ============ */
/* =================================================== */

function characterMovement()
{
    //the game character
	if(isLeft && isFalling)
	{
        // Function in character.js
		characterJumpingLeft();

	}
	else if(isRight && isFalling)
	{
		characterJumpingRight();

	}
	else if(isLeft)
	{
		characterWalkingLeft();

	}
	else if(isRight)
	{
		characterWalkingRight();

	}
	else if(isFalling || isPlummeting)
	{
		characterJumpingForward();
	}
	else
	{
		characterIdleFront();  

	}
}

// Checking if Player reached FlagPole and has enough score to finish level
function checkFlagPole()
{
  const threshold = 10;
  if (Math.abs(gameChar_x - flagpole.x_pos) < threshold)
	{
    flagpole.isReached = true;
	}
	if (flagpole.isReached && game_score === maxScore)
	{
		// Level Complete screen
		gameWonSound.play();
		GameWon();
		return;
	}
}

// Checks if the player overlapped with the coin and increments the game_score by 1
function checkCollectable(t_collectable)
{
	if (dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 50)
	{
		t_collectable.isFound = true;
		pickupSound.play();
		game_score++;
	}
}

// Checks if the player has fallen below the height of the floor and decrementing the lives by 1
function checkPlayerDie()
{
	if (respawnFrames > 0) return;
	if (gameChar_y > height)
	{
		damageSound.play();
		lives--;

		if (lives > 0 )
		{
			startGame();
		}
		else
		{
			gameOverSound.play();
			GameOver();
		}
	}	
}