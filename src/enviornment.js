/* =================================================== */
/* ============== Drawing Enviornment ================ */
/* =================================================== */


/* ============================= */
/* ===== Clouds (mid-simple) ==== */
/* ============================= */
function drawClouds() {
  for (let i = 0; i < clouds.length; i++) {
    // base puffs
    noStroke();
    fill(255);
    ellipse(clouds[i].x1, clouds[i].y1, 90, 58);
    ellipse(clouds[i].x2, clouds[i].y2, 66, 44);
    ellipse(clouds[i].x3, clouds[i].y3, 70, 46);

    // soft outline for definition
    stroke(235);
    strokeWeight(2);
    noFill();
    ellipse(clouds[i].x1, clouds[i].y1, 90, 58);
    ellipse(clouds[i].x2, clouds[i].y2, 66, 44);
    ellipse(clouds[i].x3, clouds[i].y3, 70, 46);

    // tiny highlight
    noStroke();
    fill(255, 255, 255, 120);
    ellipse(clouds[i].x1 - 18, clouds[i].y1 - 14, 24, 16);
  }
}

/* ================================== */
/* ===== Mountains (cap + light) ===== */
/* ================================== */
/* expects: mountains[i].topX, topY, leftX, leftY, rightX, rightY */
function drawMountains() {
  for (let i = 0; i < mountains.length; i++) {
    const m = mountains[i];

    // Body
    noStroke();
    const bodyCol = color(130, 140, 155);
    fill(bodyCol);
    triangle(m.leftX, m.leftY, m.rightX, m.rightY, m.topX, m.topY);

    // Simple light face (diagonal) for a bit of depth
    const leftFaceX = lerp(m.topX, m.leftX, 0.7);
    const leftFaceY = lerp(m.topY, m.leftY, 0.7);
    const baseMidX  = (m.leftX + m.rightX) * 0.5;
    const baseMidY  = (m.leftY + m.rightY) * 0.5;

    fill(170, 185, 200);
    triangle(m.topX, m.topY, leftFaceX, leftFaceY, baseMidX, baseMidY);

    // Snow cap that hugs edges (still simple)
    const cap = 0.30; // 0.25–0.35
    const lx = lerp(m.topX, m.leftX,  cap);
    const ly = lerp(m.topY, m.leftY,  cap);
    const rx = lerp(m.topX, m.rightX, cap);
    const ry = lerp(m.topY, m.rightY, cap);

    fill(250);
    triangle(m.topX, m.topY, lx, ly, rx, ry);

    // A tiny base shadow to “seat” the mountain
    fill(0, 0, 0, 25);
    quad(m.leftX, m.leftY, m.rightX, m.rightY, m.rightX, m.rightY + 8, m.leftX, m.leftY + 8);
  }
}

/* =============================== */
/* ============ Pines =========== */
/* =============================== */
function drawTrees() {
  for (let i = 0; i < trees_x.length; i++) {
    const left = trees_x[i];
    const cx   = left + 30; // your trunk rect was 60 wide originally

    // Trunk
    noStroke();
    fill(110, 90, 55);
    rect(cx - 7, trunkTopY, 14, 150);

    // Three simple tiers (big → small)
    fill(30, 110, 75);
    triangle(cx - 56, trunkTopY + 80, cx + 56, trunkTopY + 80, cx, trunkTopY + 10);

    fill(26, 100, 68);
    triangle(cx - 46, trunkTopY + 40, cx + 46, trunkTopY + 40, cx, trunkTopY - 24);

    fill(22, 90, 60);
    triangle(cx - 36, trunkTopY + 6,  cx + 36, trunkTopY + 6,  cx, trunkTopY - 56);

    // Minimal highlight strokes so it reads nicely
    stroke(255, 255, 255, 30);
    strokeWeight(2);
    line(cx - 18, trunkTopY - 10, cx - 6, trunkTopY - 6);
    noStroke();
  }
}

/* =============================== */
/* ========== FlagPole  ========== */
/* =============================== */
function drawFlagPole() {
  push();
  translate(flagpole.x_pos, floorPos_y);

  // Pole
  stroke(150);
  strokeWeight(5);
  line(0, -250, 0, 0);

  // Base
  noStroke();
  fill(100);
  rect(-8, -8, 16, 12, 3);

  // Flag position: down when reached or score condition met
  const flagDown = (flagpole.isReached || game_score == 3);
  const y = flagDown ? -50 : -250;

  // Flag (two-tone for interest)
  fill(220, 40, 55);
  rect(0, y, 48, 18);
  fill(255, 230, 80);
  rect(0, y + 18, 48, 12);

  pop();
}

/* =============================== */
/* =========== Canyon  ========== */
/* =============================== */
function drawCanyon(t_canyon) {
  const x = t_canyon.x_pos;
  const w = t_canyon.width;
  const y = floorPos_y;   // your ground baseline
  const h = height - y;   // depth to bottom of canvas

  // Canyon walls
  noStroke();
  fill(139, 69, 19);              // main brown
  rect(x, y, w, h);

  // Inner shadow strip (darker brown on left wall)
  fill(100, 50, 25);
  rect(x, y, w * 0.25, h);

  // Rim (lighter lip at the top)
  fill(160, 82, 45);
  rect(x, y - 6, w, 6);

  // Bottom darkness
  fill(0, 0, 0, 60);
  rect(x, y + h - 12, w, 12);
}

function drawCollectable(t_collectable)
{
  checkCollectable(t_collectable);
  if (t_collectable.isFound) return;

  const x = t_collectable.x_pos;
  const y = t_collectable.y_pos;
  const s = 24; // fixed coin size (adjust 20–30 to taste)

  push();
  noStroke();

  // Outer rim
  fill(235, 185, 20);
  ellipse(x, y, s + 4, s + 4);

  // Face
  fill(255, 215, 0);
  ellipse(x, y, s, s);

  // Inner ring
  noFill();
  stroke(240, 200, 40);
  strokeWeight(2);
  ellipse(x, y, s * 0.65, s * 0.65);

  // Small highlight
  noStroke();
  fill(255, 255, 255, 140);
  ellipse(x - s * 0.2, y - s * 0.2, s * 0.25, s * 0.15);

  // Symbol
  fill(40, 25, 0);
  textAlign(CENTER, CENTER);
  textSize(s * 0.5);
  text("$", x, y + 1);

  pop();
}




