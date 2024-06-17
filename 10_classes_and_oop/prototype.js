// let myName = "suraj    ";

// console.log(myName.truelength);


let myHeros  = ["thor", "spidy"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh say hello`);
}
// heroPower.hitesh()
// myHeros.hitesh()

// myHeros.heyHitesh()
// heroPower.heyHitesh() // error denga


// inheritance 
const user = {
    name: "chacha",
    email: "chacha@googgle.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assingment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntexx
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLenght()
"suraj".trueLenght()
