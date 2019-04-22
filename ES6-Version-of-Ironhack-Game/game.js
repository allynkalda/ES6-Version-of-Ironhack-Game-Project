class Game {
    constructor(canvas) {
        this.player = null;
        this.obstacles = [];
        this.newobstacles = [];
        this.addlife = [];
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.gameOver = false;
        this.timer = 60;
        this.loopC = 0;
        this.numberObjects = 0.998;
    }
    
    startLoop() {
        // sets timer when started;
        this.setIntervals();
        this.startSound();
    
        this.player = new Player(this.canvas);
    
        const loop = () => {
    
            if (this.loopC == 600) {
                this.numberObjects = 0.994;
            } else if (this.loopC === 2000) {
                this.numberObjects = 0.990;
            }
           
            // Objects
            this.loopC ++;
            console.log(this.loopC);
            if (Math.random() > 0.9982) {
                 this.obstacles.push(new Obstacles(this.canvas, (Math.random() * this.canvas.height)));
            }
    
            this.generateEnemy = (image) => {
                if (Math.random() > this.numberObjects) {
                    this.newobstacles.push(new Enemies(this.canvas, (Math.random() * this.canvas.width) + 15, image));
                }
            }
    
            this.generateEnemy('elephant');
            this.generateEnemy('meteor');
            this.generateEnemy('piano');
            this.generateEnemy('piggy');
    
            if (Math.random() > 0.998) {
                this.addlife.push(new Life(this.canvas, (Math.random() * this.canvas.width) + 15, 'cupid'));
            }
    
          
            this.clearCanvas();
            this.updateCanvas();
            this.drawCanvas();
            this.checkCollisions();
            // Ends game when timer is 0, winning condition
            if (this.timer === 0) {
                this.gameOver = true;
                this.stopSound();
                setTimeout(this.LevelUpGame, 2000);
                setTimeout(this.winSound, 2000);
                return;
            }
            // Game ends when gameOver is true, losing condition
            if (this.gameOver === false) {
                window.requestAnimationFrame(loop);
            } else {
                this.stopSound();
                this.player.dead();
                setTimeout(this.endOfGame, 2000);
                setTimeout(this.killedSound, 2000);
                this.timer = 0;
            }
        }
        window.requestAnimationFrame(loop);
    }

    // Start animation loop
    clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateCanvas() {
        this.player.update();
        this.updateArrays = (array) => {
            array.forEach( (objects) => objects.update());
        }
        this.updateArrays(this.obstacles);
        this.updateArrays(this.newobstacles);
        this.updateArrays(this.addlife);
    }

    drawCanvas() {
        if (this.gameOver === false) {
            this.player.draw();
        }
        this.drawFunc = (array) => {
            array.forEach( function(objects) {
                objects.draw();
            });
        }
        this.drawFunc(this.obstacles);
        this.drawFunc(this.newobstacles);
        this.drawFunc(this.addlife);
    }
    
    checkCollisions = (array) => {
        if (array === this.obstacles || this.newobstacles) {
            array.forEach((objects, index) => {
                const isColliding = this.player.checkCollisions(objects);
             
                if(isColliding) {
                    array.splice(index, 1);
                    this.player.setLives();
                    if (this.player.lives === 0) {
                        this.gameOver = true;  
                    }
                } 
             })
        } else if (array === addlife) {
            array.forEach((objects, index) => {
                const isColliding = this.player.checkCollisions(objects);
                
                if(isColliding) {
                    array.splice(index, 1);
                    this.player.addLives();
                } 
             })
        }  
    }

// Setting intervals for timer
    setIntervals() {
        const setSeconds = () => {
            if (this.timer === 0) {
                clearInterval(intervals);
            } else {
            this.timer -= 1;
            let seconds = document.getElementById('seconds');
            seconds.innerHTML = `Countdown: ${this.timer}`;
            }
        }
        let intervals = setInterval(setSeconds, 1000);
    }
    
    setLevelUpCallback(callback) {
        this.LevelUpGame = callback;
    }

    killedSound() {
        var killed = document.getElementById('killed');
        killed.play();
    }

    startSound() {
        var start = document.getElementById('jaunty');
        start.volume = 0.2;
        start.play();
    }

    stopSound() {
        var start = document.getElementById('jaunty');
        start.pause();
    }

    winSound() {
        var win = document.getElementById('win');
        win.play();
    }

}



















