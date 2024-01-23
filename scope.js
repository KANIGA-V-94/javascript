//global scope(var)
sum = 0
for(var i = 0;i < 10;i++){
    sum += i
}
console.log(sum)

//while loop
i=0
while(i<10)
{
    sum += i
    i++
}
console.log(sum)

//do while loop
i = 0
do{
    sum += i
    i++
}while(i<10);
console.log(sum)

//local scope(let)
for(let i=0;i<10;i++){
    console.log(i+9)
}//let will work only in this loop so after this it will not print
console.log(i)//reference error

for(var i=0;i<10;i++){
    console.log(i+9)
}
console.log(i)

//block scope(declare first)
var a=10
console.log(a)
{
    let a = 5;
    let b = 5;
    console.log(a,b)
}
//console.log(b)//reference error
console.log(a)