// dates 

let myDate = new Date ()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object



// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM


// // let myCreatedDate2 = new Date("2023-01-14")
let myCreatedDate2 = new Date("01-14-2023")
// console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1718025391016
console.log(myCreatedDate2.getTime()); // 1673654400000
console.log(Math.round(Date.now()/1000)); // in seconds


let newDate = new Date()

console.log(newDate.getDate());


// `${newDate.getDate()} and the time ${}`


newDate.toLocaleDateString('default', {
    weekday: "long",
})



