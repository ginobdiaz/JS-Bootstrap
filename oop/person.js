class PersonClass {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }   //<<< notice, there is no commas
    getBio(){
        let bio = `${this.firstName} is ${this.age}` 

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
    
        return bio
    }
    setName(fulName){
        const names = fulName.split(' ')
        this.firstName = names[0];
        this.lastName = names[1];        
    }
}

const myMe = new PersonClass('Gino','Diaz', 57, ['Dog walking','Coding', 'Half-Life'])
console.log(myMe.getBio())
//myMe.setName('Sandra Cortez')
console.log(myMe.getBio())

//constructor function:
/* const Person = function (firstName, lastName, age, likes=[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}
// Object methods
Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}` 

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })


    return bio
}
Person.prototype.setName = function (fulName){
    const names = fulName.split(' ')
    this.firstName = names[0];
    this.lastName = names[1];
} */

const QB = new Person('Sam','Bradford', 28);
const me = new Person('Gino','Diaz', 57);
const cindo = new Person('','', 37, ['Motherhood','Outdoors','Boat rides']);
cindo.setName('Cindo, Vasquez');

console.log(me.getBio());
console.log(QB.getBio());
console.log(cindo.getBio())