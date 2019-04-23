class Obstacles {
    constructor(canvas) {
        this.speed = 4;
        this.width = 140;
        this.height = 70;
        this.direction = 1;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = 0;
        this.y = this.canvas.height - 100;
    }

    draw() {
        let img = document.getElementById('car');
        this.ctx.drawImage(img, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
    }

    update() {
        this.x = this.x + this.direction * this.speed;
    }

} 


// New Obstacles

class Enemies {
    constructor(canvas, x, img) {
        this.speed = 3;
        this.width = 100;
        this.height = 75;
        this.direction = 1;
        this.image = img;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = 10;
    }

    draw() {
        let image = document.getElementById(this.image);
        this.ctx.drawImage(image, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
    }

    update() {
        this.y = this.y + this.direction * this.speed;
    }

} 


// Get life
class Life {
    constructor(canvas, x, img) {
        this.speed = 3;
        this.width = 100;
        this.height = 75;
        this.direction = 1;
        this.image = img;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = 10;
    }

    draw() {
        let image = document.getElementById(this.image);
        this.ctx.drawImage(image, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
    }

    update() {
        this.y = this.y + this.direction * this.speed;
    }
}





