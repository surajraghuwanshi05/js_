const score = 400

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2));


const otherNumber = 23.896

console.log(otherNumber.toPrecision(4))


const hundreds =10000
console.log(hundreds.toLocaleString('en-IN'))  // 10,000



// **************** Maths *********************
console.log(Math) 
console.log(Math.abs(-4)) // 4 
console.log(Math.round(4.6)); // 4
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.6)) // 4

console.log(Math.random()) // 0 to 1 ke beech me
console.log(Math.random);

const min = 10 
const max = 20 
console.log(Math.floor(Math.random() * (max -min + 1)))
