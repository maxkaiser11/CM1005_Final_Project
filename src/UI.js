/* ======================================================================= */
/* ============================ Drawing the UI =========================== */
/* ======================================================================= */

// --------- Helpers (icons) ---------
function drawCoin(x, y, r)
{
  noStroke();
  fill(235, 185, 20); ellipse(x, y, r*2 + 4, r*2 + 4);   // rim
  fill(255, 215, 0);  ellipse(x, y, r*2, r*2);           // face
  noFill(); stroke(240, 200, 40); strokeWeight(2);
  ellipse(x, y, r*1.3, r*1.3);                           // inner ring
  noStroke(); fill(255,255,255,130);                     // highlight
  ellipse(x - r*0.5, y - r*0.5, r*0.7, r*0.45);
}

function drawHeart(x, y, s, colFill, colStroke)
{
  // simple heart: two circles + triangle
  noStroke(); if (colFill) fill(colFill); else fill(220,60,70);
  ellipse(x - s*0.5, y - s*0.2, s, s);
  ellipse(x + s*0.5, y - s*0.2, s, s);
  triangle(x - s, y - s*0.1, x + s, y - s*0.1, x, y + s);
  if (colStroke) { noFill(); stroke(colStroke); strokeWeight(1); bezier(x- s, y - s*0.1, x- s*0.6, y + s*0.5, x+ s*0.6, y + s*0.5, x + s, y - s*0.1); }
}

// --------- HUD card ---------
function HUD()
{
  // draw in screen space (you already call HUD() after pop())
  const cardX = 16, cardY = 16, cardW = 220, cardH = 64;

  // drop shadow
  noStroke(); fill(0, 0, 0, 80);
  rect(cardX + 3, cardY + 4, cardW, cardH, 10);

  // card
  fill(255, 255, 255, 230);
  rect(cardX, cardY, cardW, cardH, 10);

  // score
  drawCoin(cardX + 20, cardY + 36, 9);
  noStroke(); fill(30);
  textAlign(LEFT, CENTER);
  textSize(18);
  text("Score: " + game_score, cardX + 40, cardY + 36);

  // lives (hearts)
  const maxL = (typeof maxLives !== 'undefined' && maxLives) ? maxLives : lives;
  const startX = cardX + 130;
  for (let i = 0; i < maxL; i++) {
    const filled = i < lives;
    const fillCol = filled ? color(220, 60, 70) : color(160, 160, 160, 140);
    const strokeCol = filled ? color(140, 30, 40) : color(110, 110, 110, 160);
    drawHeart(startX + i * 22, cardY + 36, 8, fillCol, strokeCol);
  }
}

// --------- Game Over modal ---------
function GameOver() {
  noLoop();
  // dim background
  noStroke(); fill(0,0,0,140); rect(0,0,width,height);

  // modal card
  const w = 420, h = 220, x = width/2 - w/2, y = height/2 - h/2;
  fill(30, 30, 40, 235);
  rect(x, y, w, h, 16);

  // title
  textAlign(CENTER, CENTER);
  fill(255); textSize(56);
  text("Game Over", width/2, height/2 - 28);

  // hint
  fill(220); textSize(18);
  text("Press R to restart", width/2, height/2 + 40);
}

// --------- Level Complete modal ---------
function GameWon() {
  noLoop();
  // dim background
  noStroke(); fill(0,0,0,120); rect(0,0,width,height);

  // modal card
  const w = 460, h = 220, x = width/2 - w/2, y = height/2 - h/2;
  fill(25, 40, 30, 235);
  rect(x, y, w, h, 16);

  // title
  textAlign(CENTER, CENTER);
  fill(230, 255, 230); textSize(48);
  text("Level Complete!", width/2, height/2 - 30);

  // hint
  fill(200, 240, 200); textSize(18);
  text("Press R to play again", width/2, height/2 + 40);
}
