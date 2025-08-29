function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	if (!isPlummeting)
	{
		if (keyCode == 37)
		{
			console.log("left arrow");
			isLeft = true;
		}
		else if (keyCode == 39)
		{
			console.log("right arrow");
			isRight = true;
		}
		else if (keyCode == 32)
		{
			if (!isFalling)
			{
                jumpSound.play();
				gameChar_y -= 120;
			}
		}
	}
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

	if (keyCode == 37)
	{
		console.log("left arrow")
		isLeft = false;
	}
	else if (keyCode == 39)
	{
		console.log("right arrow")
		isRight = false;
	}
}