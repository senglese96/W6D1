const Asteroid = require("./asteroid.js");

function Game(){
    this.asteroids = [];
    for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
        this.asteroids.push(this.addAsteroids());
    }
}

Game.prototype.addAsteroids = function () {
    return new Asteroid(this.randPosition(), this)
}

Game.prototype.randPosition = function () {
    const x = Math.floor(Math.random() * 800);
    const y = Math.floor(Math.random() * 800); 
    return [x, y];
}

Game.prototype.draw = function (ctx){
    ctx.clearRect(0, 0, 800, 800);
    this.asteroids.forEach(function (asteroid){

        asteroid.draw(ctx);
    });
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
        asteroid.move();
    });
}

Game.prototype.wrap = function(pos){
    if(pos[0] <= 0){
        pos[0] += 800;
    } else if(pos[0] >= 800){
        pos[0] -= 800;
    }
    if (pos[1] <= 0) {
        pos[1] += 800;
    } else if (pos[1] >= 800) {
        pos[1] -= 800;
    }
    return pos;
}

Game.DIM_X = 800;
Game.DIM_Y = 800;
Game.NUM_ASTEROIDS = 4;

module.exports = Game;