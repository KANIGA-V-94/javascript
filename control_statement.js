//looping 
//for loop
sum = 0
for(var i = 0;i < 10;i++){
    sum += i
}
console.log(sum)

//while loop
i=0
sum=0
while(i<10)
{
    sum += i
    i++
}
console.log(sum)


//do while loop
sum = 0
i = 0
do{
    sum += i
    i++
}while(i<10)
console.log(sum)

//example 1
arr = [10,20,30] //valid input
console.log(arr.length)
for(var i = 0;i < arr.length;i++){
    console.log(arr[i])
}

//example 2
arr=[10,20,20.5]//valid input
console.log(arr.length)
for(var i = 0;i < arr.length;i++){
    console.log(arr[i])
}

//example 3
arr = [10,20,true,false] // valid input
console.log(arr.length)
for(var i = 0;i < arr.length;i++){
    console.log(arr[i])
}

//example 4
arr = [10,"string","kongu","20",true] // valid input
console.log(arr.length)
for(var i = 0;i < arr.length;i++){
    console.log(arr[i])
}
//javascript can old all the datatypes including functions in the array values
 //for in loop

 arr = [10,"string","kongu",20,true]
 for(const index in arr){
    console.log("the value present in ",index,"is",arr[index])
 }

 //for of
 arr = [10,"string","kongu",20,true]
 for(const value of arr){
    console .log(value)
 }

//for each
//example 1
 arr = [10,"string","kongu",20,true]
 arr.forEach(value =>{
    console.log(value)
 });

 //example2
 var kongu = new Object()
kongu["fees"] = 100000
kongu["accomodation"] = "Excellent"
kongu["food"] = "pretty decent"
kongu["hostel_count"] = 10
console.log(kongu)
//for in eg
for (key in kongu){
    console.log(key,kongu[key])
}
// for each eg
kongu.forEach((key,element) => {
    console.log(key,element)
});