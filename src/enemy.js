/* =================================================== */
/* ============== Enemy Spawner ================ */
/* =================================================== */

function Enemy(x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;

    this.currentX = x;
    this.inc = 1;

    this.w = 46;
    this.h = 26

    this.update = function()
    {
        this.currentX += this.inc;

        if (this.currentX >= this.x + this.range)
        {
            this.inc = -1;
        }
        else if (this.currentX < this.x)
        {
            this.inc = 1;
        }
    }

    this.draw = function()
    {
        push();
        translate(this.currentX, this.y);
        this.update();

        // tiny bob so it feels alive
        const bob = sin(frameCount * 0.12 + this.currentX * 0.02) * 2;
        translate(0, bob);

        // shadow
        noStroke();
        fill(0, 0, 0, 60);
        ellipse(0, this.h * 0.55, this.w * 0.8, 10);

        // body (rounded rectangle)
        noStroke();
        fill(200, 60, 70);                 // main
        rect(-this.w/2, -this.h, this.w, this.h, 10);

        // belly stripe
        fill(230, 90, 95);
        rect(-this.w*0.35, -this.h*0.55, this.w*0.7, this.h*0.4, 8);

        // eyes
        fill(255);
        ellipse(-10, -this.h*0.6, 10, 8);
        ellipse( 10, -this.h*0.6, 10, 8);

        // pupils look in movement direction
        fill(20);
        const eyeShift = this.inc * 2.5;
        ellipse(-10 + eyeShift, -this.h*0.6, 3.5, 3.5);
        ellipse( 10 + eyeShift, -this.h*0.6, 3.5, 3.5);

        // teeth
        fill(255);
        triangle(-6, -6, -2, -6, -4, -1);
        triangle( 2, -6,  6, -6,  4, -1);

        // feet
        fill(60, 30, 30);
        rect(-this.w*0.25, this.h*0.25, 8, 6, 2);
        rect( this.w*0.17, this.h*0.25, 8, 6, 2);

        pop();
    }

     this.getBounds = function()
     {
        return {
            left:   this.currentX - this.w/2,
            right:  this.currentX + this.w/2,
            top:    this.y - this.h,
            bottom: this.y + 8
        };
  }

  	// Basic AABB collision Check
    this.checkAABB = function(gc_x, gc_y, halfW, height)
    {
        const e = this.getBounds();
        const p = {
        left:   gc_x - halfW,
        right:  gc_x + halfW,
        top:    gc_y - height,
        bottom: gc_y
        };
        return (p.right > e.left && p.left < e.right && p.bottom > e.top && p.top < e.bottom);
    };
}
