// singleton 
//Object.create

// object literals

const mySym = Symbol("key1")

const JSUser = {
    name: "suraj",
    "full name": "suraj raghuvanshi",
    [mySym]: "mykey1", // [] ye lagate taki as a symbol treat kre barna nahi karega
    location:"pipariya",
    email: "suraj@123",
    isLoggedin : false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["full name"])
// console.log(JSUser[mySym]); // symbol ko [] se hi access karte hai . se nahi


JSUser.email = "suraj1234" // email change ho jaga 
// Object.freeze(JSUser) // freeze krne ke bad koi change nahi kar payega 
JSUser.email = "234fdvdwsf@343" // ye change nahi hui 
// console.log(JSUser);




JSUser.greeting = function(){
    console.log("hello js Users");
}

JSUser.greetingTwo = function(){
    console.log(`hello js Users ${this.name}`);
}

// console.log(JSUser.greeting) // functional ka refrence bas ayega
console.log(JSUser.greeting()); // 
console.log(JSUser.greetingTwo());


