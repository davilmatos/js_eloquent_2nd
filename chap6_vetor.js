//creating the Vector class instead of a constructor function
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
};

//creating the plus method for the Vector class
Vector.prototype.plus = function(otherVector) {
    return new Vector (this.x + otherVector.x, this.y + otherVector.y);
};

//creating the minus method for the Vector class
Vector.prototype.minus = function(otherVector) {
    return new Vector (this.x - otherVector.x, this.y - otherVector.y);
};

//creating the length property (getter) for the Vector class
Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

//tests
console.log(new Vector(1, 2).plus(new Vector(2, 3))); // → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3))); // → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length); // → 5
