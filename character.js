class Character {

    constructor(ctx, gameW, gameH, keys, obstacles) {

        this.ctx = ctx;

        this.gameWidth = gameW;
        this.gameHeight = gameH;
        this.obstacles = obstacles,
        this.width = 500;
        this.height = 500;

        this.image = new Image();
        this.image.src = "./images/IdleRigth.png";
        this.image.frames = 4;
        this.image.framesIndex = 2;

        this.posX = 20;
        this.posY = this.gameHeight - this.height + 70;
        this.posY0 = this.posY;

        this.velY = 1;
        this.gravity = 0.4;
        this.velX = 5;

        this.keys = keys;
        this.posAttack = 1,
        this.bullets = [];
        this.pos = 0, //cambio direccion imagen bullet
        this.afterJump = 0,
        this.setListeners();
        this.state = 0
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

        this.bullets.forEach(bullet => bullet.draw())
        this.clearBullets()
        this.moveJump()

    }

    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.image.framesIndex++;
        }
        if (this.image.framesIndex > this.image.frames - 1) {
            this.image.framesIndex = 0;
        }
    }

    moveJump() {
        if (this.posY < this.posY0) {
            this.posY += this.velY;
            this.velY += this.gravity;
        } else {
            this.posY = this.posY0;
            this.velY = 1;
        }
    }

    setListeners() {

        document.addEventListener("keydown", e => {
            console.log(this.afterJump)
            switch (e.keyCode) {
                //SALTO HACIA LOS DOS LADOS------------
                case this.keys.top:
                    if (this.posY >= this.posY0 || this.velY == 0) {

                        if (this.pos == 2) {
                            this.afterJump = 2
                            this.image.frames = 2;
                            this.image.src = "./images/JumpLeft.png";
                            this.jump();
                            document.addEventListener("keypress", e => {

                                this.posX -= this.velX;
                                this.posX -= 30
                            })

                        } else if (this.pos == 1) {
                            this.posX += this.velX;
                            this.image.frames = 2;
                            this.image.src = "./images/JumpRight.png"
                            this.jump()
                            this.afterJump = 1
                        } else {

                            this.image.frames = 2;
                            this.image.src = "./images/JumpRight.png"
                            this.jump()
                            this.afterJump = 1
                        }
                        if (this.posY == this.posY0) {
                            this.image.src = "./images/IdleLeft.png";
                            this.image.frames = 4;
                        }
                    }
                    break;
                    //ATAQUE HACIA LOS DOS LADOS-----------
                case this.keys.space:
                    if (this.posAttack == 2) {
                        this.image.frames = 4;
                        this.image.src = "./images/AttackLeft.png";
                        this.shoot();

                        break
                    } else if (this.posAttack == 1) {
                        this.image.frames = 4;
                        this.image.src = "./images/AttackRight.png";
                        this.shoot();

                        break;
                    }


                    //MOVIMIENTO IZQUIERDA-----------------
                    case this.keys.left:
                        this.posAttack = 2
                        this.pos = 2
                        this.image.frames = 8;
                        this.image.src = "./images/runLeft.png";
                        this.posX -= this.velX
                        document.addEventListener("keyup", e => {
                            if (this.pos == 2) {
                                this.image.src = "./images/IdleLeft.png";
                                this.image.frames = 4;
                                this.pos = 0
                                this.posAttack = 2
                            }
                        });
                        break;
                        //MOVIMIENTO DERECHA---------------
                    case this.keys.right:
                        this.posAttack = 1
                        this.pos = 1
                        this.image.frames = 8;
                        this.image.src = "./images/RunRigth.png";
                        this.posX += this.velX
                        document.addEventListener("keyup", e => {
                            if (this.pos == 1) {
                                this.image.src = "./images/IdleRigth.png";
                                this.image.frames = 4;
                                this.pos = 0
                                this.posAttack = 1
                            }
                        });

                        break

            }
        });

    }
    /*collisionBullet(){
    console.log(this.bullets.posX, " --personaje ")
    console.log(this.enemies.posX + "---enemigo")
    if(this.bullets.posX >= this.enemies.posX &&
    this.mainChar.bullets.posX  <= this.enemies.posX&&
    this.mainChar.bullets.posY >= this.enemies.posY&&
    this.mainChar.bullets.posY <= this.enemies.posY)
        return true
}*/
    jump() {
        this.posX += this.velX;
        this.posY -= 70;
        this.velY -= 8;
        this.velY += this.gravity;
        console.log("pacooooooooo", this.obstacles.posY)
        if (this.posY >= this.playerPosY0 + this.playerHeight) {
            this.velY *= -1;
        }

    }
    shoot() {
        this.bullets.push(new Bullets(this.ctx, this.posX, this.posY, this.posY0, this.width, this.height, this.pos, this.posAttack));
    }


    clearBullets() {
        this.bullets = this.bullets.filter(bull => bull.posX <= this.gameWidth);
    }
    
}