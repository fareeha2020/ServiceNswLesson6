/* Create a class called Pet
Give the class 3 properties called givenName, age and ownerId
Create a constructor that assigns the 3 properties above*/

class Pet {
    // givenName;
    // age;
    // ownerId;
    constructor(givenName,age,ownerId){
        this.givenName=givenName;
        this.age=age;
        this.ownerId=ownerId;
    }
};

let me=new Pet("far",1,22);
console.log(me);
// Create a class called Owner with 3 properties: givenName, familyName and id
//Create a constructor for the Owner class that assigns the values above.
//Create a method in the class Owner called getFullName that takes no arguments and returns the full name of the owner
class owner{
    constructor(givenName,familyName,id){
        this.givenName=givenName;
        this.familyName=familyName;
        this.id=id;
    }
    getFullName(){
        return `The full name is ${this.givenName} ${this.familyName}`;
    }
    static getFullNameStatic(owner){
        return ` ${owner.givenName} ${owner.familyName}`;
    }
};
let you=new owner("tom","tim",12);
console.log(you);
console.log(you.getFullName());//demostrates instance methods
console.log(owner.getFullNameStatic(you));//demonstrates static method

