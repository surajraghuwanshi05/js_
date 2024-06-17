function mutiplyBy5(num){
    return num*5
}
mutiplyBy5.power = 2

console.log(mutiplyBy5(5));
console.log(mutiplyBy5.power);
console.log(mutiplyBy5.prototype);


function createUser(username, score){
    this.username =username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser('tea', 250)

chai.printMe()
console.log(chai.increment())

/* Here's what heppend behind the scene when the new keyword is used:

a new objct is created: the new Keyword initiates the creation of a new javascript object.

A prototype is linked: the newly created object gets linked to the prototype property of constructor function.This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specific arguments and this is bound to the newly created object. if no explicit return value is specific from the ccounstructor. JavaScript assumes this, the newly created object, to be the intended return value.

the new object is returned; After the constructor function has been called, if it doesnt
return a non-premitive value(object, array, function, etc.) the newly created object is
returned */
