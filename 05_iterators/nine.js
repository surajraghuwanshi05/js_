const myNums=[1,2,3]


// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and curval:${currval}`);
//     return acc + currval}, 0)

const myTotal = myNums.reduce( (acc, cur) => acc+cur, 0)

console.log(myTotal);


const shoppingCart = [
{
    itemname: "py",
    price:5999},
    {itemname: "jv",
    price:99},
    {itemname: "kk",
    price:999},
    {itemname: "mp",
    price:59}


]

let priceToPay= shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


