//hoisting => first call then declare it

//variable hoisting
console.log(a)
var a = 10 // output : undefined

console.log(b)
let b = 10 // output : reference error*/

//functional hoisting
konguClg(5,10)
function konguClg(a,b){
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("the number",i,"is even")
        }
        else{
            console.log("the number",i,"is odd")
        }
    }
}