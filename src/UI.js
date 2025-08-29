/* ======================================================================= */
/* ============================ Drawing the UI =========================== */
/* ======================================================================= */

function HUD()
{
    fill(255);
	noStroke();
	text("Score: " + game_score, 20, 20);
	text("Lives: " + lives, 20, 40);
}

function GameOver()
{
    noLoop();
    textSize(64);
    fill(255,0,0)
    textAlign(CENTER, CENTER);
    text("Game Over", width/2, height/2);
}

function GameWon()
{
    noLoop();
    textSize(64);
    fill(0, 255, 0);
    textAlign(CENTER, CENTER);
    text("LEVEL COMPLETE!", cameraPosX, gameChar_y -100);
}