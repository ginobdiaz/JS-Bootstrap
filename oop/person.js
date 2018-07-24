// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null
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
    set fullName(fulName){
        const names = fulName.split(' ')
        this.firstName = names[0];
        this.lastName = names[1];        
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends PersonClass{
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position;
    }
    getBio(){
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft(){
        return 65 - this.age;
    }
}



const myMe = new Employee('Gino','Diaz', 57, 'old coder', ['Dog walking','Coding', 'Half-Life'])
console.log(myMe.getBio())
myMe.fullName = 'Sandra Cortez'
myMe.age = 32
myMe.position = 'Office manager'
console.log(myMe.getBio())

//constructor function:
// Prototypal Inheritance
/*
 const Person = function (firstName, lastName, age, likes=[]) {
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

/* const QB = new Employee('Sam','Bradford', 28, 'QB', ['football', 'golfing']);
const me = new PersonClass('Gino','Diaz', 57);
const cindo = new PersonClass('','', 37, ['Motherhood','Outdoors','Boat rides']);
cindo.setName('Cindo, Vasquez');

console.log(me.getBio());
console.log(QB.getBio());
console.log(cindo.getBio()) */


// 1. Create class for students
// 2. Track student grade. 0 - 100
// 3. Override bio to print a passing or failing message. 70 and above "Andrew is passing the class"
// 4. Create "updateGrade" that takes the amount to add or remove from the grade

//work flow
// create student
// print status (failing or passing)
// change grade to change status
// print status again.


class Student extends PersonClass{
    constructor(firstName, lastName, age, grade = 0, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade;
    }    
    getBio(){
        const status = (this.grade > 70) ? 'passing' : 'failing';
        return `${this.firstName} ${this.lastName} is ${status}.`
    }
    updateGrade(score){
        this.grade += score;
        return this.getBio(); 
    }
}

const s1 = new Student('Joe', 'Johnson', 21, 40);
s1.fullName = 'Joanna Johnson'
console.log(s1.getBio())
console.log(s1.updateGrade(25));
console.log(s1.updateGrade(25));
console.log(s1.updateGrade(-5));