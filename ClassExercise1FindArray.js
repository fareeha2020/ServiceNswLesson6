/*Create a static method in the
 class Pet called getOwnerById that
  takes 2 arguments, the first should be a pet object and the second should be an array of owners. The function should return the full name of the owner with an id matching the ownerId of the pet or else return an error message.*/
  class Pet {
    constructor(givenName,age,ownerId)
    {
    this.givenName=givenName;
    this.age=age;
    this.ownerId=ownerId;
}
static getOwnerById(petObject,arrayOwners)
{
    //usng find and anonymous function
    let foundowner=arrayOwners.find(function(owner){
        return Owner.id== petObject.ownerId;
      });
    }
};
// //    let foundOwner;//just a bucket from where we can access the value
//    for (let i = 0; i < arrayOwners.length; i++)
//     {
//        const owner = arrayOwners[i];
//        if(owner.id==petObject.ownerId)
//        {
//            foundOwner=owner;
//            break;
//        }
//     }
//     if(!foundOwner){
//         //if no owner found
//      return "Error";
//     }
//     return foundOwner.getFullName();
//    }
  
// }; 

class Owner{
constructor(givenName,familyName,id){
    this.givenName=givenName;
    this.familyName=familyName;
    this.id=id;
}
    getFullName()
    {
        return `The full name is ${this.givenName} ${this.familyName}`;
    }
}
let owners=[
    new Owner("Luke", "Parker", 20),
    new Owner("Dan", "Williams", 21),
    new Owner("Lucy", "Potts", 20),
    new Owner("Owen", "Daniels", 23)
];

let petObject=new Pet("Fareeha",20,20);

console.log(Pet.getOwnerById(petObject,owners));
