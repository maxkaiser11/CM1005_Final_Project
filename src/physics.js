// Physics
let vy = 0;

var isGrounded = false;

const GRAVITY          = 0.50; 
const JUMP_SPEED       = 12.0;
const MAX_FALL_SPEED   = 10;

const MOVE_SPEED_GROUND = 2.8;
const MOVE_SPEED_AIR    = 2.6;

const FEET_HALF = 10;         

const PLATFORM_H = 20;

function overCanyonSpan(xLeft, xRight)
{
  for (const c of canyons) {
    if (xRight > c.x_pos && xLeft < c.x_pos + c.width) return true;
  }
  return false;
}

function updatePlayerPhysics()
{
  // horizontal first
  const move = isFalling ? MOVE_SPEED_AIR : MOVE_SPEED_GROUND;
  if (isLeft)  gameChar_x -= move;
  if (isRight) gameChar_x += move;

  const prevY = gameChar_y;

  // gravity
  vy += GRAVITY;
  if (vy > MAX_FALL_SPEED) vy = MAX_FALL_SPEED;
  gameChar_y += vy;

  // assume airborne;
  let grounded = false;

  // --- platform landing
  if (vy >= 0) {
    const EPS = 1;
    for (const p of platforms)
		{
      const leftX  = p.x - FEET_HALF;
      const rightX = p.x + p.length + FEET_HALF;
      const withinX    = (gameChar_x >= leftX && gameChar_x <= rightX);
      const crossedTop = (prevY <= p.y + EPS && gameChar_y >= p.y - EPS);
      if (withinX && crossedTop)
			{
        gameChar_y = p.y;
        vy = 0;
        grounded = true;
        break;
      }
    }
  }

	  // --- floor landing if not on a platform ---
  if (!grounded)
	{
    const overCanyon = overCanyonSpan(gameChar_x - FEET_HALF, gameChar_x + FEET_HALF);
    if (!overCanyon && gameChar_y >= floorPos_y)
		{
      gameChar_y = floorPos_y;
      vy = 0;
      grounded = true;
    }
  }

  // finalize flags used by your animation picker
  isGrounded = grounded;
  isFalling  = !grounded;
    

  if (gameChar_y > height + 50) isPlummeting = true;
}
