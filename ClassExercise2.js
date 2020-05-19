//Create a class called Square with a single property, sideLength and create a constructor that assigns that value
class Square {
    constructor(sideLength){
        this.sideLength=sideLength;
    }
    get area(){
        return this.sideLength*2;
    }

}
console.log(new Square(10.23));
let me=new Square(4);
console.log(me);
console.log(me.area);
