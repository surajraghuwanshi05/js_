class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this.password.toUppercase()
    }

    set password(value){
        this.password = value
    }
}


const hitesh = new User("htesh.ai", "123")
console.log(hitesh.password);