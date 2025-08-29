/* =================================================== */
/* ================ Character Setup ================== */
/* =================================================== */

function characterJumpingLeft()
{
	// add your jumping-left code
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 50, 35)

		// body
		fill(255, 0,0);
		rect(gameChar_x - 13, gameChar_y - 35, 26, 30);

		// feet
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 5, 10, 10);

		fill(0);
		rect(gameChar_x + 5, gameChar_y - 5, 10, 10);

		fill(0);
		rect(gameChar_x - 20, gameChar_y - 30, 10, 10);
}

function characterJumpingRight()
{
	// add your jumping-right code
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 50, 35)

		// body
		fill(255, 0,0);
		rect(gameChar_x - 13, gameChar_y - 35, 26, 30);

		// feet
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 5, 10, 10);

		fill(0);
		rect(gameChar_x + 5, gameChar_y - 5, 10, 10);

		fill(0);
		rect(gameChar_x + 10, gameChar_y - 30, 10, 10);
}

function characterWalkingLeft()
{
	// add your walking left code
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 50, 35)

		// body
		fill(255, 0,0);
		rect(gameChar_x - 13, gameChar_y - 35, 26, 30);

		// feet
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 5, 10, 10);

		fill(0);
		rect(gameChar_x + 5, gameChar_y - 5, 10, 10);

		// hand
		fill(0);
		rect(gameChar_x - 20, gameChar_y - 30, 10, 10);
}

function characterWalkingRight()
{
	// add your walking right code
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 50, 35)

		// body
		fill(255, 0,0);
		rect(gameChar_x - 13, gameChar_y - 35, 26, 30);

		// feet
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 5, 10, 10);

		fill(0);
		rect(gameChar_x + 5, gameChar_y - 5, 10, 10);

		fill(0);
		rect(gameChar_x + 10, gameChar_y - 30, 10, 10);
}

function characterJumpingForward()
{
	// add your jumping facing forwards code
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 50, 35)
		// body
		fill(255, 0,0);
		rect(gameChar_x - 13, gameChar_y - 35, 26, 30);
		// feet
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 5, 10, 10);
		fill(0);
		rect(gameChar_x + 5, gameChar_y - 5, 10, 10);
		// hands
		fill(0);
		rect(gameChar_x - 20, gameChar_y - 30, 10, 10);

		fill(0);
		rect(gameChar_x + 10, gameChar_y - 30, 10, 10);
}

function characterIdleFront()
{
	// add your standing front facing code
		// head
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 50, 35)

		// body
		fill(255, 0,0);
		rect(gameChar_x - 13, gameChar_y - 35, 26, 30);

		// feet
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 5, 10, 10);
		rect(gameChar_x + 5, gameChar_y - 5, 10, 10);  
}