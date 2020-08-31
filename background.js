class Background {

    constructor(ctx, w, h, img) {
        this.ctx = ctx
        
        this.backgroundWidth = w
        this.backgroundHeight = h
        

        this.backgroundImg = new Image()
        this.backgroundImg.src = img

        this.backgroundPos = {
            x: 0,
            y: 0
        }
       

        this.backgroundSpeed = 1
            
    }

    draw() {
        
        this.move()
        this.ctx.drawImage(this.backgroundImg, this.backgroundPos.x, this.backgroundPos.y, this.backgroundWidth, this.backgroundHeight);
        this.ctx.drawImage(this.backgroundImg, this.backgroundPos.x + this.backgroundWidth, this.backgroundPos.y, this.backgroundWidth, this.backgroundHeight);
         
    }

    move() {
        this.backgroundPos.x <= -this.backgroundWidth ? this.backgroundPos.x = 0 : this.backgroundPos.x -= this.backgroundSpeed
    }
}