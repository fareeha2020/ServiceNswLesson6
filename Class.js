//switch statements based on conditions,goes to cases and break it 
//default executes for invalid input
//switch(condition){ case "1": logic break;
//case "2: logic break;"}


class person{
    constructor(lname,fname,age)
    {
     this.lname=lname;
     this.fname=fname;
     this.age=age;
    }
    ages;
}
let me=new person("far","fari",10);//one instance 
let you=new person("ton","far",2);
console.log(me);
//me.age=20;
//console.log(me);
console.log(you);

let person1=[//several instances array of objects
    new person("a","b",1),
    new person("d","e",1),
    new person("a","b",1)
]
    //console.log(person1[0]);//always access with object name
    
