Function.prototype.inherits = function (parent) {
    function Surrogate(){};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inherits2 = function(parent){
    this.prototype = Object.create(prarent);
    this.prototype.constructor = this;
}