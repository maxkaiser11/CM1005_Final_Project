var keyCode;
var key;

function keyPressed()
{
  if (isPlummeting) return;

  if (keyCode === LEFT_ARROW)  isLeft = true;
  if (keyCode === RIGHT_ARROW) isRight = true;

  if (keyCode === SPACE_BAR)
	{
    // jump only if on ground
    if (isGrounded)
		{
      vy = -JUMP_SPEED;
      if (jumpSound) jumpSound.play();
	   	isGrounded = false;
      isFalling = true;
    }
  }

  if (keyCode === RESTART_KEY)
  {
    if (lives <= 0 || flagpole.isReached)
    {
      lives = maxLives;
      game_score = 0;
      vy = 0;
      isPlummeting = false;
      isFalling = false;
      isGrounded = true;

      respawnFrames = 3;

      if (typeof isLooping === 'function' && !isLooping())
      {
        loop();
      }
      startGame();
    }
  }
}

function keyReleased()
{
  if (keyCode === LEFT_ARROW)  isLeft = false;
  if (keyCode === RIGHT_ARROW) isRight = false;
}