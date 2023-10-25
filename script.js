/* let valtozoNeve = 10
valtozoNeve = 20


const valtozoNeve2 = 10

// valtozoNeve2 = 20 // const-ot nem lehet így változtatni


let array = [1, 2, 3,]
array = [4, 5, 6]
array.push(10)


const array2 = [10, 20, 30]
array2.push(200)
array2[0] = 11 */


const arr = ["nagy bence", "kiss józsi", "tóth jános"]

for(let i = 0; i < arr.length;i++)
console.log(arr[i])


arr.forEach((value, index) => {
    console.log("at index: ", index, " is: ",value)
    console.log(`at index: ${index} is: ${value}`) // template literal, ${jsExpression} <- template literal expression
})


let mapResult = arr.map((value, index) => {
    console.log(`at index: ${index} is: ${value}`)
})



for (const value of arr) {
    console.log(`forof: ${value}`)
    
}