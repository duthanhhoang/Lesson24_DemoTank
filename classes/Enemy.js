class Enemy{
    constructor(canvas, x, y) {
        this.x = x;
        this.y = y;
        this.speed = 3; //magic number
        this.width = 40;
        this.height = 40;
        this.canvas = canvas;
        this.dir = DIR_LEFT;
        this.time = 0;
        this.reloadTime = 25;
    }

    render() {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
    }

    changeDirect(){
        let dirs = [DIR_BOTTOM, DIR_LEFT, DIR_RIGHT, DIR_TOP];
        let randomDirs = new Array(80).fill(this.dir);
        for (let i = 0; i < dirs.length; i++) {
            randomDirs.push(dirs[i])
        }
        let rand = Math.floor(Math.random()*randomDirs.length);
        this.dir = randomDirs[rand];
    }

    move() {
        this.changeDirect();
        switch (this.dir) {
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
    }

    autoFire(){
        this.time++;
        if(this.time > this.reloadTime){
            let bullet = new Bullet(this.canvas,this.x + this.width/2, this.y + this.height/2);
            bullet.dir = this.dir;
            this.time = 0;
            return bullet;
        }
        
    }
}