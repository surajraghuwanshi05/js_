class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}
const hitesh = new User("suraj")
// console.log(hitesh.createId());