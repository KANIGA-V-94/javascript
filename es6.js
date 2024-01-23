//ES6 -> ECMA Script 6 Standard
//1.var, let, const => refer variable.js

//2.Arrow function

var fun=() =>{
    console.log("Hello")
}
fun()

//3.Destructuring Operator
var arr = [10,20,30,40,50]
var [a,b,c,d,e] = arr
console.log(a,b,c,d,e)

//4. Spread Operator
var arr = [10,20,30,40,50]
var arr1 = [...arr,60,70]
console.log(arr1)
