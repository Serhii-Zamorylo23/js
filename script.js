let sum = 0
let n = prompt('Введіть к-сть разів')
let max = prompt('Введіть максимальне число')
for (let i= 1; i <= n; i++){
    let temp = Math.random()*max
    temp = Math.floor(temp)
    console.log(temp)
    sum+=temp
}
console.log(sum)