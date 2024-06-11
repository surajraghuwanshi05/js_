function saymyName() {
    console.log("h");
    console.log('i');
    console.log("t");
}


// saymyName() 

// function addTwoNumber(number1, number2) { // parameters (number1, number2)
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2) { // parameters (number1, number2)
    let result = number1 + number2
    return result
}
function loginUserMessege(username){
    return `${username} just logged in `
}

// console.log(loginUserMessege()) // jab koi value nahi dege to undefined ayega 


// function calculateCardPrice(...num1){ // ... ye rest oprator hai yaha pr multiple input eke liye use krte 
//     return num1
// }

// console.log(calculateCardPrice(200, 400, 500)) // [ 200, 400, 500 ]

function calculateCardPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCardPrice(200, 400, 500)) // [500]


const user = {
    username: "suraj@1233",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({username:"qwdfc",
    price:234
})

const myNewArray = [200, 340 ,55]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))