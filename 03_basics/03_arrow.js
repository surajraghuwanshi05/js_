const user = {
    username: "suraj",
    price: 999,

    welcomeMesseage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}

// user.welcomeMesseage()
// user.username = "sam"
// user.welcomeMesseage()
// console.log(this); // bahar karte to emty {} de dete hai


// function chai(){
//     let username = "suraj"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()   // undefiend


const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}
// chai()

//  arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }

// impicit return - maine man liya return likhne ki jarurat nahi hai 
// {} likha to return likhna padega 
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>({username:"hitesh"})


console.log(addTwo(3,4))