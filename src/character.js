/* =================================================== */
/* ================ Character Setup ================== */
/* =================================================== */

const SKIN  = [245, 205, 180];
const HAIR  = [60, 60, 70];
const SHIRT = [220, 40, 55];
const ACCENT= [255, 230, 80];
const PANTS = [35, 35, 40];
const SHOES = [20, 20, 25];

/* 
   Shared renderer:
   dx:  1 (facing right), -1 (facing left)
   airborne: true/false
   walkT: a phase value for walk cycle

   (PS: I am a self taught Game Dev and currently work at Roarington AG)
*/
function drawCharacter(dx, airborne, walkT)
{
  push();
  translate(gameChar_x, gameChar_y);
  scale(dx, 1); // mirror for left-facing
  noStroke();

  /* Shadow */
  fill(0, 0, 0, 50);
  ellipse(0, 0, 28, 8);

  /* Walk cycle offsets (subtle sway) */
  const step = airborne ? 0 : sin(walkT) * 4;
  const bob  = airborne ? -2 : cos(walkT) * 1.5;

  /* Body (rounded rectangle) */
  fill(SHIRT);
  rect(-14, -40 + bob, 28, 34, 8);

  /* Accent stripe (e.g., scarf/belt) */
  fill(ACCENT);
  rect(-14, -30 + bob, 28, 6, 3);

  /* Head */
  fill(SKIN);
  ellipse(0, -56 + bob, 30, 34);

  /* Hair (simple cap) */
  fill(HAIR);
  arc(0, -63 + bob, 30, 22, PI, 0, CHORD);

  /* Eyes */
  fill(255);
  ellipse(-6, -58 + bob, 7, 5);
  ellipse( 6, -58 + bob, 7, 5);
  fill(20);
  ellipse(-6, -58 + bob, 2.5, 2.5);
  ellipse( 6, -58 + bob, 2.5, 2.5);

  /* Mouth */
  stroke(150, 40, 40);
  strokeWeight(2);
  if (airborne) {
    line(-5, -49 + bob, 5, -49 + bob); // focused mouth when jumping
  } else {
    noFill();
    arc(0, -51 + bob, 10, 6, 0, PI);   // friendly smile
  }
  noStroke();

  /* Arms (simple ellipses that swing) */
  const armSwing = airborne ? -6 : step;
  fill(SKIN);
  // Back arm
  ellipse(-18, -35 + bob - armSwing, 8, 12);
  // Front arm
  ellipse( 18, -33 + bob + armSwing, 8, 12);

  /* Legs */
  fill(PANTS);
  // Thighs
  rect(-11, -16 + bob + (airborne ? -2 : 0) + step, 10, 12, 3);
  rect(  1, -16 + bob + (airborne ? -2 : 0) - step, 10, 12, 3);
  // Shoes
  fill(SHOES);
  rect(-11,  -6 + bob + (airborne ? -2 : 0) + step, 10, 8, 2);
  rect(   1, -6 + bob + (airborne ? -2 : 0) - step, 10, 8, 2);

  pop();
}

/* =================================================== */
/* ============== Pose Wrapper Functions ============== */
/* =================================================== */

function characterJumpingLeft()
{
  // Left-facing, airborne, no walk cycle sway
  drawCharacter(-1, true, 0);
}

function characterJumpingRight()
{
  drawCharacter(1, true, 0);
}

function characterWalkingLeft()
{
  // Use frameCount for a lightweight walk cycle
  drawCharacter(-1, false, frameCount * 0.25);
}

function characterWalkingRight()
{
  drawCharacter(1, false, frameCount * 0.25);
}

function characterJumpingForward()
{
  // Forward look ≈ face right with symmetric pose (airborne)
  // If you want perfectly centered, you can pass dx=1 and keep features symmetric.
  drawCharacter(1, true, 0);
}

function characterIdleFront()
{
  drawCharacter(1, false, 0);
}
