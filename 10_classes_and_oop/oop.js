const user = {
    username: "hitesh",
    loginCount: 8,
    singnedIn: true,

    getUserDetails:function(){
        // console.log("Got user details from databases");
        // console.log(`Username:${this.username}`)
        console.log(this);

    }
}

console.log(user.username);
console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this

}

const userOne = new User("suraj","15", true)
const userTwo = new User("ChaiAurCode", "12", false)
// console.log(userOne);
console.log(userTwo.constructor);

// jab new keyword use krte hai pahle ek empty object create hote hai jisko instence bola jata hai 
// second step counstructor function call hota hai new keyword ke karan ye argument ko pack karta hai aur apn ko  de deta hai
// thid setp me this keyword me jo hamne argument bagera likhe hote hai vo inject ho jate hai