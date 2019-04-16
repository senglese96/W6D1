const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
// const Defaults = {COLOR: "black", RADIUS: 4};

function Asteroid(pos, game) {
    MovingObject.call(this, {pos: pos, color: Asteroid.COLOR, radius: Asteroid.RADIUS, vel: Util.randomVec(10), game: game});
}

Asteroid.COLOR = "#000000";
Asteroid.RADIUS = 10;

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;