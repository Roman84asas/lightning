/*jshint esversion: 6 */

(() => {
    const TWO_PI = 2 * Math.PI;
    const canvas = document.createElement('canvas');
    const ctx    = canvas.getContext('2d');

    let w        = canvas.width = innerWidth;
    let h        = canvas.hegth = innerHeight;
    let canvColl = '#232332';
    
    let mx            = 0;
    let my            = 0;
    let toggle        = 0;
    let circles       = [];
    let circlesCount  = 2;

    class Circle {
        constructor(x, y) {
            this.x = x || Math.random() * w;
            this.y = y || Math.random() * h;
        }

        draw(x, y) {
            this.x = x || this.x;
            this.y = y || this.y;

            ctx.lineWidth   = 1.5;
            ctx.fillStyle   = 'white';
            ctx.strokeStyle = 'red';

            ctx.beginPath();
            ctx.arc(this.x, this.y, 6, 0, TWO_PI);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, 36, 0, TWO_PI);
            ctx.closePath();
            ctx.stroke();
        }
    }

    canvas.onmousemove = e => {
        mx = e.x - canvas.getBoundingClientRect;
        my = e.y - canvas.getBoundingClientRect;
    }


    function init() {
        canvas.style.background = canvColl;
        document.querySelector('body').appendChild(canvas);

        for (let index = 0; index < circlesCount; index++) {
            circles.push( new Circle() );
            
        }
    }

    function loop() {
        ctx.clearRect(0, 0, w, h);

        circles.map( i => { 
            i.draw(); 
        });
        requestAnimationFrame(loop);
    }

    init();
    loop();
})();