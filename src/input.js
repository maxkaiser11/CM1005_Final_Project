var keyCode;
var key;

function keyPressed()
{
  if (isPlummeting) return;

  if (keyCode === LEFT_ARROW)  isLeft = true;
  if (keyCode === RIGHT_ARROW) isRight = true;

  if (key === ' ' || keyCode === 32)
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
}

function keyReleased()
{
  if (keyCode === LEFT_ARROW)  isLeft = false;
  if (keyCode === RIGHT_ARROW) isRight = false;
}