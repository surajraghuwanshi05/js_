// Promises-> the promise object represents the eventual completion (or failure) of an 
// aysncnorous operation and its resulting value. 
// A promise is in one of these  states:
// 1.pending: initial state, neither fulfilled nor rejected. 
// 2.fullfilled: meaning that the operation failed.
// 3. rejected: meaning that the operation failed


const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("ASync task is complete");
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASync task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({usernam:"chai", email:
            "chai@exaple.com"
        })

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function () {
        let err = true
        if (!err) {
            resolve({username:"suraj", password:"123"})
            
        }else{reject('ERROR somthing went Wrong ')}
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function () {
        let err = true
        if (!err) {
            resolve({username:"javascript", password:"123"})
            
        }else{reject('Error; js Went wrong ')}
    },1000)
});

 // you can use this syntex too
async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()


// async function getALlUserds(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//     const data = response.json()
//     } catch{
//         console.log("E:", error);
//     }
// }

// getALlUserds()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))




