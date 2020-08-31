class Enemy {

    constructor(ctx, gameW, gameH, backPos, character) {

        this.ctx = ctx;
        this.backPos = backPos
        this.gameWidth = this.backPos.backgroundWidth;
        this.gameHeight = this.backPos.backgroundHeight;
        this.character = character;
        this.width = 500;
        this.height = 500;

        this.image = new Image();
        this.image.src = "./images/IdleLeft.png";
        this.image.frames = 4;
        this.image.framesIndex = 1;

        this.posX = this.gameWidth - 300;
        this.posY = this.gameHeight - this.height + 70;
        this.posY0 = this.posY;
        this.enemiPosX = this.character.posX
        this.velY = 1;
        this.gravity = 0.4;
        this.velX = 5;


        this.posAttack = 0
        this.bullets = [];
        this.pos = 0; //cambio direccion imagen bullet
        this.afterJump = 0;

        this.state = 0;
    }

    draw(framesCounter) {

        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
            0,
            Math.floor(this.image.width / this.image.frames),
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        );

        this.animate(framesCounter)
        this.move()

    }
    move() {


        if (this.character.pos == 2) {
            this.posX += this.character.velX
        }
        if (this.character.pos == 1) {
            this.posX -= this.character.velX
        }
        if (this.character.posX > this.posX - 800) {
            if (this.character.posX < this.posX - 101) {

                this.posX -= 2
                this.image.frames = 8;
                this.image.src = "./images/runLeft.png";
            } else if (this.character.posX > this.posX + 110) {
                this.posX += 2
                this.image.frames = 8;
                this.image.src = "./images/runRigth.png";
            } else if (this.character.posX < this.posX - 100) {
                this.image.frames = 4;
                this.image.src = "./images/AttackLeft.png";
            } else if (this.character.posX > this.posX + 109) {
                this.image.frames = 4;
                this.image.src = "./images/AttackRight.png";
            }
        }
    }
    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.image.framesIndex++;
        }
        if (this.image.framesIndex > this.image.frames - 1) {
            this.image.framesIndex = 0;
        }

    }
    damage() {



    }

    
}