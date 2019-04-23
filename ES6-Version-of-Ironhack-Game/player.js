"use strict";

class Player {
    constructor(canvas) {
        this.lives = 3;
        this.height = 80;
        this.width = 65;
        this.canvas = canvas;
        this.x = this.canvas.width/2;
        this.y = this.canvas.height - 100;
        this.ctx = this.canvas.getContext('2d');
        this.speed = 3;
        this.ySpeed = 5;
        this.direction = 0;
        this.originY = 0;
        this.gravity = 0.9;
    }
    // Image of Kenny alive
    draw() {
        let img = document.getElementById('kenny');
        this.ctx.drawImage(img, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
    }

    // Replace image to dead Kenny
    dead() {
        let img = document.getElementById('deadkenny');
        this.ctx.drawImage(img, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
    }
    // Player movement + jumping
    update() {

        this.x = this.x + this.direction * this.speed;

        this.y += this.ySpeed
        if (this.y < this.canvas.height - 100) {
            this.ySpeed += this.gravity
        } else {
            this.ySpeed = 0;
        }
    }

    // Player direction
    setDirection(newDirection) {
        this.direction = newDirection;
    }

    // Substracts lives
    setLives() {
        this.lives--;
        this.hitSound();
        document.getElementById('lives').innerHTML = "Kenny's lives: " + this.lives;
    }

    // Add lives
    addLives() {
        this.lives++;
        this.jumpSound();
        document.getElementById('lives').innerHTML = "Kenny's lives: " + this.lives;
    }

    // Checks Collisions with objects
    checkCollisions(enemy) {
        const collisionRight = this.x + this.width/2 > (enemy.x + 10) - enemy.width/2;
        const collisionLeft = this.x - this.width/2 < (enemy.x - 10) + enemy.width/2;
        const collisionTop = this.y - this.height/2 < (enemy.y - 10) + enemy.height/2;
        const collisionBottom = this.y + this.height/2 > (enemy.y + 10) - enemy.height/2;

        return collisionRight && collisionLeft && collisionTop && collisionBottom;
}

    hitSound() {
        let hit = document.getElementById('ouch');
        hit.play();
    }

    jumpSound() {
        let jump = document.getElementById('jump');
        jump.play();
    }
}











