const name = "suraj"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

// another way to declare string it gives some extra features

const gameName = new String("Suraj@123")

// console.log(gameName[0]) // S 

// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4) // isme negetive value nahi de sakte 
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString)




const newStringOne = "   hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https: // hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
console.log(gameName.split('@'))

