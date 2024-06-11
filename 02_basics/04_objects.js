// const tinderUser = new Object() // ye ek singleton object hai

const tinderUser = {} // ye non singleton object hai 

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "suraj",
            lastname: 'raghuvanshi'
        }
    }

}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}


// const obj3 = Object.assign(obj1, obj2)  // aise v kr sakte 
// const obj3 = Object.assign({}, obj1, obj2) // pr ye achha rhta {} ye target ho jata iske andar sare marge hote
const obj3 = {...obj1, ...obj2} // mostly ye bala hi use karte hai apn
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = { 
    coursename: "js in hindi",
    price:12345,
    courseinstructor: "hitesh"
}


// course.courseinstructor

const {courseinstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);


// {

//     name: "suraj",
//     courseName: "js in hindi ",
//     price: "free",
// }


[
    {},
    {},
    {}
    
]


