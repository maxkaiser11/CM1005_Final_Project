/* =================================================== */
/* ============== Drawing Enviornment ================ */
/* =================================================== */

function drawClouds()
{
	for(var i = 0; i < clouds.length; i++)
	{
		fill(255,255,255);
		ellipse(clouds[i].x1, clouds[i].y1, 80, 80);
		ellipse(clouds[i].x2, clouds[i].y2, 60, 60);
		ellipse(clouds[i].x3, clouds[i].y3, 60, 60);
	}
}

function drawMountains()
{
	for (var i = 0; i < mountains.length; i++)
	{
		fill(128, 128, 128);
		triangle(mountains[i].topX -100, mountains[i].topY, mountains[i].leftX -100, mountains[i].leftY, mountains[i].rightX -250, mountains[i].rightY);
	}
}

function drawTrees()
{
	for (var i = 0; i < trees_x.length; i++)
	{
		// Tree Trunk
		fill(120, 100, 40);
		rect(trees_x[i], trunkTopY, 60, 150);

		// Branches
		fill(0, 155, 0);
		triangle(trees_x[i] - 50, trunkTopY + 50, trees_x[i] + 30, trunkTopY - 50, trees_x[i] + 110, trunkTopY + 50);
		triangle(trees_x[i] - 50, trunkTopY, trees_x[i] + 30, trunkTopY - 100, trees_x[i] + 110, trunkTopY);
	}
}

function drawCanyon(t_canyon)
{
	fill(139,69,19)
	rect(t_canyon.x_pos, 432, t_canyon.width, 154)
}

function drawCollectable(t_collectable)
{
	checkCollectable(t_collectable);
	if (!t_collectable.isFound)
	{
		stroke(0);
		fill(255, 215, 0);
		circle(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size - 25);
		fill(0);
		noStroke();
		text("$", t_collectable.x_pos -3, t_collectable.y_pos + 4);
	}
}

function drawFlagPole() {
  push();
    translate(flagpole.x_pos, floorPos_y);
    stroke(150);
    strokeWeight(4);
    line(0, -250, 0, 0);
    noStroke();
    if (!flagpole.isReached && game_score != 3) {
      rect(0, -250, 50, 30);
    } else {
      rect(0, -50, 50, 30);
    }
  pop();
}