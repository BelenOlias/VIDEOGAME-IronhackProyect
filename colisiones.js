//Player vs obstacles (plataformas)

// collisionObstacles() {
// if (this.playerpos.x + this.playerwidth >= this.obspos.x && this.playerposx <= this.obsposx + this.obswidth) {
//     this.player.speed*(-1)
// }

// if (this.playerpos.y + this.playerheight >= this.obspos.y && this.playerposy <= this.obspos.y + this.obsheight) {
//     this.player.gravity = 0
// }
//}

//Player vs enemies --> boolean

// collisionEnemy(){ 
// return this.enemies.some ( enemy => {
//  return (
//  this.playerpos.x + this.playerwidth >= this.enemypos.x &&
//  this.playerposx <= this.enemyposx + this.enemywidth &&
//  this.playerpos.y + this.playerheight >= this.enemypos.y &&
//  this.playerposy <= this.enemypos.y + this.enemyheight
//   )
// })
// }

//Enemies vs bullets (bullets tienen height y width?) --> boolean

// collisionEnemyBullets(){ 
// return this.enemies.some ( enemy => {
//  return (
//  this.bulletpos.x + this.bulletwidth >= this.enemypos.x &&
//  this.bulletposx <= this.enemyposx + this.enemywidth &&
//  this.bulletpos.y + this.bulletheight >= this.enemypos.y &&
//  this.bulletposy <= this.enemypos.y + this.enemyheight
//   )
// })
// }

//Bullets vs obstacles (reboten)

//collisionBulletsObstacles
//this.bulletpos.x > this.obstaclespos.x - this.bulletwidth ? this.bulletspeed.x*(-1)
//this.bulletpos.y > this.obstaclespos.y - this.bulletheight ? this.bulletspeed.y*(-1)