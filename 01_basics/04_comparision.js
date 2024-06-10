
// console.log(null > 0); // false
// console.log(null == 0);// false
// console.log(null >=0); // true 

/* the reason is that an eqlity check == and comparisons > < >= <= work
differently. 
Comparisons convert  null to a number , treating it as 0.
thats why (3) NULL > 0 is false and null >=0 is true. */


console.log(undefined == 0);
console.log(undefined >= 0); // all false
console.log(undefined > 0);

// === 