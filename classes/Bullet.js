class Bullet{
    constructor(canvas, x, y) {
        this.x = x;
        this.y = y;
        this.speed = 10; //magic number
        this.width = 10;
        this.height = 10;
        this.canvas = canvas;
        this.dir = "";
    }

    render() {
        let ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        // ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI)
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
    }

    fly(){
        switch (this.dir) {
            case DIR_LEFT:
                this.x -= this.speed;
                break;
            case DIR_RIGHT:
                this.x += this.speed;
                break;
            case DIR_TOP:
                this.y -= this.speed;
                break;
            case DIR_BOTTOM:
                this.y += this.speed;
                break;
        }
    }
}