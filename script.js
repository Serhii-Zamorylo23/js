/*const use= ()=>{
    console.log("Hello")
}
use()
for(let i=1;i<=10;i++){
    use()
}
*/
let sum=0
const products = [
    { 
        id: 1, 
        name: "Iphone", 
        price: 3000,
        count: 2
    }, 
    {
        id: 2,
        name: "TV",
        price: 5000,
        count: 1
    }
]

const totalSum = (productsArr) => { 
    let sum = 0
    for (let i=0;i<=productsArr.length-1;i++){
        sum += productsArr[i].price*productsArr[i].count 
    }
    return(sum)
}
console.log(totalSum(products))