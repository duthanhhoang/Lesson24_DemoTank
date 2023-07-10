class Tank {
    constructor(canvas, x, y) {
        this.x = x;
        this.y = y;
        this.speed = 10; //magic number
        this.width = 40;
        this.height = 40;
        this.canvas = canvas;
        this.dir = "";
        this.time = 0;
        this.reloadTime = 15;
    }

    render() {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    }

    move(key) {
        switch (key) {
            case DIR_LEFT:
                this.x -= this.speed;
                // this.dir = DIR_LEFT;
                break;
            case DIR_RIGHT:
                this.x += this.speed;
                // this.dir = DIR_RIGHT;
                break;
            case DIR_TOP:
                this.y -= this.speed;
                // this.dir = DIR_TOP;
                break;
            case DIR_BOTTOM:
                this.y += this.speed;
                // this.dir = DIR_BOTTOM;
                break;
        }
        this.dir = key;
    }

    fire(){
        this.time++;
        if(this.time > this.reloadTime){
            let bullet = new Bullet(this.canvas,this.x + this.width/2, this.y + this.height/2);
            bullet.dir = this.dir;
            this.time = 0;
            return bullet;
        }
        
    }
}