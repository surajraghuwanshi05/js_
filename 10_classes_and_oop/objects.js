function mutiplyBy5(num){
    return num*5
}
mutiplyBy5.power = 2

console.log(mutiplyBy5(5));
console.log(mutiplyBy5.power);
console.log(mutiplyBy5.prototype);


function createUser(username, score){
    this.username =username
}