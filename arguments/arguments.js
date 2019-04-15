function sum(){
    let args = Array.from(arguments);
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total
}

function newSum(...args){
    let total = 0;
    args.forEach((element) => {
        total += element;
    })
    return total;
}

Function.prototype.myBind = function(context) {
    let args = Array.from(arguments).slice(1, arguments.length);
    let that = this;
    return function() {
        let args2 = Array.from(arguments);
        that.apply(context, args.concat(args2));
    };
};

Function.prototype.myBind2 = function(context, ...args) {
    let that = this;
    return function(...args2) {
        that.apply(context, args.concat(args2))
    }
};

Function.prototype.curry = function (numArgs) {
    let args = [];
    let that = this;
    function _curried(arg){
        args.push(arg);
        if(numArgs === args.length){
            return that(...args);
        } else{
            return _curried;
        }
    }
    return _curried;
};