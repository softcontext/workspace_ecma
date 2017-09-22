"use strict";
var Car = (function () {
    function Car(doors) {
        this.doors = doors;
        // this.doors = doors;
        this.color = 'white';
    }
    return Car;
}());
var c = new Car(3);
console.log(c);
